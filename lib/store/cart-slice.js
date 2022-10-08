import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantityModel: [],
  },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const existingModel = state.totalQuantityModel.find((item) => item.model === newItem.model);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          model: newItem.model,
        });
      } else {
        existingItem.quantity++;
      }
      if (!existingModel) {
        state.totalQuantityModel.push({
          model: newItem.model,
          modelQuantity: 1
        })
      } else {
        existingModel.modelQuantity = existingModel.modelQuantity + 1
      }
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      const existingModel = state.totalQuantityModel.find((item) => item.model === newItem.model);
      if (existingItem.quantity == 1) {
        state.items = state.items.filter(item => item.id !== newItem.id);
      } else {
        existingItem.quantity--;
      }
      if (existingModel.modelQuantity === 1) {
        state.totalQuantityModel = state.totalQuantityModel.filter(item => item.model !== newItem.model)
      } else {
        existingModel.modelQuantity--;
      }
    },
    setItemAmount(state, action) {
      const newItem = action.payload;
      const existingModel = state.totalQuantityModel.find((item) => item.model === newItem.model);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingModel && parseInt(newItem.quantity)>0) {
        state.totalQuantityModel.push({
          model: newItem.model,
          modelQuantity: parseInt(newItem.quantity)
        })
      } else if (existingModel && parseInt(newItem.quantity)<1 && existingItem) {
        existingModel.modelQuantity = existingModel.modelQuantity - parseInt(existingItem.quantity)
      } else if (existingModel && newItem.quantity.trim().length == 0) {
        existingModel.modelQuantity = existingModel.modelQuantity - parseInt(existingItem.quantity)
      } else if (existingModel && !existingItem && parseInt(newItem.quantity)>0) {
        existingModel.modelQuantity = existingModel.modelQuantity + parseInt(newItem.quantity)
      } else if (existingModel && existingItem && parseInt(newItem.quantity)>0) {
        existingModel.modelQuantity = existingModel.modelQuantity + parseInt(newItem.quantity) - parseInt(existingItem.quantity)
      }
      if (existingModel) {
        if(existingModel.modelQuantity == 0) {
          state.totalQuantityModel = state.totalQuantityModel.filter(item => item.model !== newItem.model);
        }
      }
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.title,
          model: newItem.model
        });
      } else {
        if (newItem.quantity == 0) {
          state.items = state.items.filter(item => item.id !== newItem.id);
        } else {
          existingItem.quantity = newItem.quantity;
        }
       
      }
      
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;