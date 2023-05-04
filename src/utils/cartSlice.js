import { createSlice } from "@reduxjs/toolkit";

/* 
Flow
click -----> dispatch action ----> reducer fn ---->  store ----> subscribe ----> UI result
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //state.items.push(action.payload);
      let isPresent = false;
      //check whether this item is present in our cart or not by traversing items cart array and maching ids, if present then increase its quantity
      state.items.map((stateitem) => {
        if (stateitem.item.id === action.payload.id) {
          isPresent = true;
          stateitem.quantity++;
        }
      });

      //suppose, item is added to cart for first time, in that case, isPresent will be false, and we would make that item quantity = 1
      if (!isPresent) {
        isPresent = true;
        /* const tempItemObj = action.payload;
        tempItemObj.quantity = 1; */
        const tempItemObj = {
          item: action.payload,
          quantity: 1,
        };
        state.items.push(tempItemObj); //now we will push this tempObj into our Store
      }
    },
    clearCart: (state) => {
      state = [];
    },
    removeItems: (state, action) => {
      let isQuantityOne = true;
      state.items.map((obj) => {
        if (obj.item.id === action.payload.id) {
          if (obj.quantity !== 1) {
            obj.quantity--;
            isQuantityOne = false;
          }
        }
      });
      if (isQuantityOne) {
        state.items = state.items.filter((obj) => {
          return obj.item.id !== action.payload.id;
        });
      }
    },
  },
});

export default cartSlice.reducer; //use reducer instead of reducers
export const { addItems, clearCart, removeItems } = cartSlice.actions; //destructure the actions then export

/* 
slice => cart 
cart = [items,reducer]
reducer => fn to modify the items
*/
