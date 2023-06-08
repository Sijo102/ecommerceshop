// Updated Code

export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// For Add item to Cart

export const addToCart = (product) => {
    return  {
        type : ADD_TO_CART,
        payload : product
    }
}

// For Increment Quantity In Cart

export const incrementQuantity = (productId) => {
    return {
        type : INCREMENT_QUANTITY,
        payload : productId
    }
}

// For Decrement Quantity In Cart

export const decrementQuantity = (productId) => {
    return {
        type : DECREMENT_QUANTITY,
        payload : productId
    }
}

// For Delete item from Cart

export const removeFromCart = (product) => {
    return {
        type : REMOVE_FROM_CART,
        payload : product
    }
};