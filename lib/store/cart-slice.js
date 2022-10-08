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
      
      const existingModelQuantity = 0

      for (let i = 0; i < existingItems.length; i++) {
        existingModelQuantity = existingModelQuantity + parseInt(existingItems[i].quantity)
      }
      const change = Math.abs(parseInt(modelName.quantity) - existingModelQuantity)
      const test = parseInt(modelName.quantity) - parseInt(existingModelQuantity)
      const changeLeft = Math.abs(parseInt(modelName.quantity) - parseInt(existingModelQuantity))

      console.log(change);
      if(test > 0) {
        existingItems.sort((a, b) => (a.quantity < b.quantity) ? 1 : -1)
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
        existingItems.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)
        for (let i = 0; i < existingItems.length; i++) {
          const amountToRemove = Math.ceil((parseInt(change) * ((existingItems[i].quantity)/existingModelQuantity)))
          // If the amount to remove is less than the amount that is left to remove
          if (changeLeft > amountToRemove && amountToRemove <= existingItems[i].quantity) {
            if (amountToRemove == existingItems[i].quantity) {
              state.items = state.items.filter(item => item.id !== existingItems[i].id);
              changeLeft = changeLeft - amountToRemove
              console.log("1.1");
            } else {
              existingItems[i].quantity = existingItems[i].quantity - amountToRemove
              changeLeft = changeLeft - amountToRemove
              console.log("1.2");
            }
            //if the amount to remove is equal to the amount that is left to remove 
          } else if (changeLeft == amountToRemove && amountToRemove == existingItems[i].quantity && changeLeft != 0) {
            existingItems[i].quantity = existingItems[i].quantity - amountToRemove
            changeLeft = 0
            state.items = state.items.filter(item => item.id !== existingItems[i].id);
            console.log("2.1");

            //if the amount to remove is greater than what is left to remove and what is left to change is less than the quantity of the item
          } else if (changeLeft < amountToRemove && changeLeft < existingItems[i].quantity && changeLeft != 0) {
            console.log(changeLeft);
            existingItems[i].quantity = existingItems[i].quantity - changeLeft
            changeLeft = 0
            console.log("3.1")

            //if the amount to remove is greater than what is left to remove and what is left to remove is equal to the quantity of the item
          } else if (changeLeft < amountToRemove && changeLeft == existingItems[i].quantity && changeLeft != 0) {
            changeLeft = 0
            state.items = state.items.filter(item => item.id !== existingItems[i].id);
            console.log("4.1");

            //if the amount to remove is zero 
          } else if (changeLeft == 0) { 
            console.log("5.1")
            break;
          }
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