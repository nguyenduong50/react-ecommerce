import { createSlice, configureStore } from '@reduxjs/toolkit';

import productPopupSlice from './product-popup';

const store = configureStore({
    reducer: {
        productPopup: productPopupSlice.reducer,
    }
});

const productPopupActions = productPopupSlice.actions;

export {productPopupActions};
export default store;