export const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  ADD_MORE: "ADD_MORE",
  REMOVE_ONE: "REMOVE_ONE",
  REMOVE_ALL: "REMOVE_ALL",
  INIT_STORED: "INIT_STORED",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: Product | Array<Product>;
};

export const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error(`action.payload missing in ADD action`);
      }

      if (!Array.isArray(action.payload)) {
        const { id } = action.payload;

        const filteredCart: ProductList = state.cart.filter(
          (item) => item.id != id
        );

        const output = {
          ...state,
          cart: [...filteredCart, { ...action.payload, quantity: 1 }],
        };

        localStorage.setItem("state", JSON.stringify(output));
        return output;
      }
    }

    case REDUCER_ACTION_TYPE.ADD_MORE: {
      if (!action.payload) {
        throw new Error(`action.payload missing in ADD_MORE action`);
      }
      if (!Array.isArray(action.payload)) {
        const { id } = action.payload;

        const filteredCart: ProductList = state.cart.filter(
          (item) => item.id != id
        );
        const itemExists: Product | undefined = state.cart.find(
          (item) => item.id == id
        );

        let quantity: number;

        if (action.payload.digital) {
          quantity = itemExists ? itemExists.quantity : 1;
        } else {
          quantity = itemExists ? itemExists.quantity + 1 : 1;
        }

        const output = {
          ...state,
          cart: [...filteredCart, { ...action.payload, quantity }],
        };

        localStorage.setItem("state", JSON.stringify(output));
        return output;
      }
    }

    case REDUCER_ACTION_TYPE.REMOVE_ONE: {
      if (!action.payload) {
        throw new Error(`action.payload missing in REMOVE_ONE action`);
      }
      if (!Array.isArray(action.payload)) {
        const { id } = action.payload;

        const filteredCart: ProductList = state.cart.filter(
          (item) => item.id != id
        );
        const itemExists: Product | undefined = state.cart.find(
          (item) => item.id == id
        );

        const quantity: number = itemExists ? itemExists.quantity - 1 : 1;

        // Find shipping product

        const shippingProduct = filteredCart.filter(
          (item: Product) =>
            item.id === "bkupshp1" ||
            item.id === "sozc6w3vydixiwj" ||
            item.id === "nvpkiir4gkmyozd"
        );

        let outputCart = filteredCart;

        if (shippingProduct.length > 0 && filteredCart.length === 1) {
          outputCart = filteredCart.filter(
            (item: Product) =>
              item.id != "bkupshp1" &&
              item.id != "sozc6w3vydixiwj" &&
              item.id != "nvpkiir4gkmyozd"
          );
        }

        let output;

        if (quantity < 1) {
          output = { ...state, cart: [...outputCart] };
        } else {
          output = {
            ...state,
            cart: [...outputCart, { ...action.payload, quantity }],
          };
        }

        localStorage.setItem("state", JSON.stringify(output));
        return output;
      }
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error(`action.payload missing in REMOVE action`);
      }

      if (!Array.isArray(action.payload)) {
        const { id } = action.payload;
        const filteredCart: ProductList = state.cart.filter(
          (item) => item.id != id
        );

        // Find shipping product

        const shippingProduct = filteredCart.filter(
          (item: Product) =>
            item.id === "bkupshp1" ||
            item.id === "sozc6w3vydixiwj" ||
            item.id === "nvpkiir4gkmyozd"
        );

        let outputCart = filteredCart;

        if (shippingProduct.length > 0 && filteredCart.length === 1) {
          outputCart = filteredCart.filter(
            (item: Product) =>
              item.id != "bkupshp1" &&
              item.id != "sozc6w3vydixiwj" &&
              item.id != "nvpkiir4gkmyozd"
          );
        }

        const output = { ...state, cart: [...outputCart] };
        localStorage.setItem("state", JSON.stringify(output));
        return output;
      }
    }

    case REDUCER_ACTION_TYPE.REMOVE_ALL: {
      const output = { ...state, cart: [] };
      localStorage.setItem("state", JSON.stringify(output));
      return { ...state, cart: [] };
    }

    case REDUCER_ACTION_TYPE.INIT_STORED: {
      if (!action.payload) {
        throw new Error(`action.payload missing in QUANTITY action`);
      }

      if (Array.isArray(action.payload)) {
        return { ...state, cart: [...action.payload] };
      }
    }
    default:
      throw new Error(`Unidentified reducer action type`);
  }
};
