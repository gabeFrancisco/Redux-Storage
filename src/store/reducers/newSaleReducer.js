const INITIAL_STATE = {
  customer: {},
  productOrders: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CUSTOMER_ADDED":
      return { ...state, customer: action.customer };
    case "PRODUCT_ORDER_ADDED":
      // const productOrder = action.productOrder;
      // const storeProductOrder = state.productOrders.find(
      //   (el) => el.product.name === productOrder.product.name
      // );
      // if (storeProductOrder !== undefined) {
      //   console.log(storeProductOrder);
      //   console.log(productOrder);
      //   console.log(state);
      //   return {
      //     ...state,
      //     productOrders: [
      //       ...state.productOrders.map((order) => {
      //         return productOrder.product.name === storeProductOrder.product.name
      //           ? { ...state.productOrders, order: storeProductOrder }
      //           : order;
      //       }),
      //     ],
      //   };
      // }
      return {
        ...state,
        productOrders: state.productOrders.concat(action.productOrder),
      };
    case "SALE_ADDED":
      return state;
    default:
      return state;
  }
}
