import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    noOfItemInCart: "123",
    cart: []
}

const cartReducer = createSlice({
    name: 'todos',
    initialState: {
        noOfItemInCart: "123",
    },
    reducers: {
        itemSet(state, action) {
            state.noOfItemInCart = action.payload;
        }
    },
})

export default cartReducer.reducer
export const {itemSet} = cartReducer.actions