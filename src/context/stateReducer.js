import currencyFormatter from "currency-formatter";

export const initialState = {
    basket: [],
    totalPrice: 0,
    user: null,
};

const stateReducer = (state, action) => {
    console.log('action', action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [
                    ...state.basket,
                    action.item
                ],
                totalPrice: state.totalPrice + currencyFormatter.unformat(action.item.price, {code: 'USD'})
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== action.id),
                totalPrice: state.totalPrice - currencyFormatter.unformat(action.price, {code: 'USD'})
            };

        default:
            return state
    }

};

export default stateReducer;
