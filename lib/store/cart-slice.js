import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantityModel: [],
  },

  reducers: {
    changeModelQuantityCalc(state, action) {
      const modelName = action.payload;
      const existingItems = state.items.filter(((item) => item.model === modelName.model));
      existingItems.sort((a, b) => (a.quantity < b.quantity) ? 1 : -1)
      const existingModelQuantity = 0

      for (let i = 0; i < existingItems.length; i++) {
        existingModelQuantity = existingModelQuantity + parseInt(existingItems[i].quantity)
      }
      const change = Math.abs(parseInt(modelName.quantity) - existingModelQuantity)
      const test = parseInt(modelName.quantity) - parseInt(existingModelQuantity)
      const changeLeft = Math.abs(parseInt(modelName.quantity) - parseInt(existingModelQuantity))

      console.log(change);
      if(test > 0) {
        for (let i = 0; i < existingItems.length; i++) {
          const amountToAdd = Math.ceil((parseInt(change) * ((existingItems[i].quantity)/existingModelQuantity)))
          if (changeLeft > amountToAdd) {
            existingItems[i].quantity = existingItems[i].quantity + amountToAdd
            changeLeft = changeLeft - amountToAdd
          } else {
            existingItems[i].quantity = existingItems[i].quantity + changeLeft
            changeLeft = 0
          }


          if (changeLeft == 0) break;
        }
      } else {
        for (let i = 0; i < existingItems.length; i++) {
          const amountToRemove = Math.ceil((parseInt(change) * ((existingItems[i].quantity)/existingModelQuantity)))
          if (changeLeft > amountToRemove) {
            existingItems[i].quantity = existingItems[i].quantity - amountToRemove
            changeLeft = changeLeft - amountToRemove
          } else {
            existingItems[i].quantity = existingItems[i].quantity - changeLeft
            changeLeft = 0
          }


          if (changeLeft == 0) break;
        }
      }
    },
    changeModelQuantity(state, action) {
      const modelName = action.payload;
      const existingModel = state.totalQuantityModel.find((item) => item.model === modelName.model);
      if (existingModel) {
        if (modelName.quantity.trim().length == 0) {
          existingModel.modelQuantity = ""
        } else {
          existingModel.modelQuantity = parseInt(modelName.quantity)
        }
          
      }
      // add if !existingmodel
    },
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
      } else if (existingModel && newItem.quantity.trim().length == 0 && existingItem) {
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
          quantity: parseInt(newItem.quantity),
          totalPrice: newItem.price,
          name: newItem.title,
          model: newItem.model
        });
      } else {
        if (parseInt(newItem.quantity) === 0) {
          state.items = state.items.filter(item => item.id !== newItem.id);
        } else {
          existingItem.quantity = parseInt(newItem.quantity);
        }
       
      }
      
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;