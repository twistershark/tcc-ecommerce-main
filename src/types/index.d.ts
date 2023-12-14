declare module "products/HomePage" {
  const HomePage: React.ComponentType;
  export default HomePage;
}

declare module "products/Catalog" {
  const Catalog: React.ComponentType;
  export default Catalog;
}

declare module "productdetails/ProductDetails" {
  const ProductsList: React.ComponentType;
  export default ProductsList;
}

declare module "cart/Cart" {
  const Cart: React.ComponentType;
  export default Cart;
}

declare module "cart/useCart" {
  const useCart: () => any;
  export default useCart;
}

declare module "checkout/Checkout" {
  const Checkout: React.ComponentType;
  export default Checkout;
}

declare module "checkout/OrderComplete" {
  const OrderComplete: React.ComponentType;
  export default OrderComplete;
}
