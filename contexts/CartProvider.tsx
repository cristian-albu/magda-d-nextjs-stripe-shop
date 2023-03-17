import {
  createContext,
  ReactElement,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { reducer, REDUCER_ACTION_TYPE } from "./CartReducer";
const initCartState: CartStateType = { cart: [] };

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (
        localStorage.getItem("state") != null ||
        localStorage.getItem("state") != undefined
      ) {
        const localCart: any = localStorage.getItem("state");
        const { cart } = JSON.parse(localCart);

        dispatch({
          type: "INIT_STORED",
          payload: cart,
        });
      }
    }
  }, []);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.length;

  const totalPrice = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LEI",
    }).format(
      state.cart.reduce((prevValue, { quantity, price }) => {
        return prevValue + quantity * price;
      }, 0)
    );
  }, [state.cart]);

  const cart = state.cart.sort((a, b) => {
    const itemA = a.id;
    const itemB = b.id;

    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }

    return 0;
  });

  return {
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    totalPrice,
    cart,
    openCart,
    setOpenCart,
  };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
  openCart: false,
  setOpenCart: () => {},
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
