// Updated Code

import {
    ADD_TO_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART
} from '../action/actionCreator';

const cartItems = [];


const handleCartReducer = (state = cartItems, action) => {
    const product = action.payload;
    switch(action.type) {
        case ADD_TO_CART: 
            const existingCartItemIndex = state.find((item) => item.id === product.id);

            if(existingCartItemIndex) {
                // if the item is already in the cart, increment the quantity
                return state.map((item) => 
                        item.id === product.id 
                        ? {...item, quantity: item.quantity + 1}
                        : item    
                    );
                
            } else {
                // if the item is not in the cart, add it to the cart
                return [
                    ...state,
                    {
                        ...product, 
                        quantity: 1,
                    }
                ]
            };
        case INCREMENT_QUANTITY:
            return state = state.map((item) => 
                    item.id === product
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )

        case DECREMENT_QUANTITY:
            const cartItem = state.find((item) => item.id === product);
            if(cartItem.quantity === 1) {
                // if the quantity of the item is 1, remove it from the cart
                return state = state.filter((item) => item.id !== product)
            } else {
                // if the quantity of the item is more than 1, decrement the quantity
                return state = state.map((item) => 
                        item.id === product
                        ? {...item, quantity: item.quantity - 1}
                        : item
                    )
            }

            case REMOVE_FROM_CART: 
                return state = state.filter((item) => {
                    return item.id !== action.payload.id
                });

                default: 
                    return state;

    };
};

export default handleCartReducer;