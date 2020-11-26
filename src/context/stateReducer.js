import currencyFormatter from "currency-formatter";

export const initialState = {
    basket: [],
    totalPrice: 0,
    user: null,
};

const stateReducer = (state, action) => {
    console.log('action', action);

    switch (action.type) {
        //basket actions
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
            // problem delete all the same products in basket => delete only one
            const index = state.basket.findIndex((item) => item.id === action.id);

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in a basket!`);
            }

            return {
                ...state,
                basket: newBasket,
                totalPrice: state.totalPrice - currencyFormatter.unformat(action.price, {code: 'USD'})
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
                totalPrice: 0
            };
        // auth actions
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            };

        // default
        default:
            return state
    }

};

export default stateReducer;
