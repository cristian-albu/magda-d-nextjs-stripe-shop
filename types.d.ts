interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  stock: number;
  digital: boolean;
  summary: string;
  image: string;
  quantity: number;
}

type ProductList = Array<Product>;

type SingleProductObj = {
  [key: string]: Product;
};

type ProductObject = {
  [key: string]: ProductList;
};

type CartStateType = { cart: ProductList };

interface CartData {
  title: string;
  products: string;
  quantity: string;
  cost: string;
  totalItemCost: string;
  totalProducts: string;
  deleteAll: string;
  delete: string;
  removeOne: string;
  addMore: string;
  totalPrice: string;
  goToCheckout: string;
  error: string;
  btnError: string;
}

type ChildrenType = { children?: ReactElement | ReactElement[] };

type NavItem = {
  title: string;
  link: string;
  icon?: React.ReactElement | React.ReactElement[];
};

type Nav = Array<NavItem>;

type Router = { route: Array<string> };

type FormState = {
  value: string;
  errorState: string;
  firstFocus: boolean;
};

type FormSetState = React.Dispatch<React.SetStateAction<FormState>>;

type FormValidationFunc = () => {
  message: string;
  err: boolean;
};

type TextInput = {
  state: FormState;
  setState: FormSetState;
  validationCheck: FormValidationFunc;
  name: string;
  type?: string;
};

type ContactMailPayload = {
  name: string;
  email: string;
  message: string;
};
