export function instanceOfProduct(object: any): object is Product {
  return (
    "id" && "title" && "price" && "stock" && "quantity" && "digital" in object
  );
}

export function instanceOfShipping(object: any): object is Shipping {
  return "name" && "address" in object;
}
