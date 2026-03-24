import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, data) => {
      state.value = JSON.parse(localStorage.getItem('Cart'));
      let item = data.payload
      if (state.value.some(i => i.productId === item.productId)) {
        let itemInCart = state.value.find(i => i.productId === item.productId);
        itemInCart.amount++;
      } else
        state.value.push({
          productId: item.productId,
          name: item.name,
          type: item.type,
          price: item.price,
          image: item.image,
          amount: 1
        })
      localStorage.setItem('Cart', JSON.stringify(state.value));
    },

    removeFromCart: (state, data) => {
      state.value = JSON.parse(localStorage.getItem('Cart'));
      let removedItem = data.payload
      let cartItem = state.value.find(x => x.productId === removedItem.productId);
      cartItem.amount--;
      if (cartItem.amount <= 0) {
        state.value = state.value.filter(x => x.productId !== removedItem.productId)
      }
      localStorage.setItem('Cart', JSON.stringify(state.value));
    },

    checkCartStorage: (state) => {
      let LScart = JSON.parse(localStorage.getItem('Cart'))
      if (LScart === null) {
        localStorage.setItem('Cart', JSON.stringify([]))
        LScart = [];
      }
      if (LScart.length > 0)
        state.value = LScart;
      else state.value = [];
    },

    sendOrder: (state, data) => {
      let order = data.payload
      state.value = [];
      localStorage.setItem('Cart', JSON.stringify(state.value));
      localStorage.setItem("orderNumber", order.number);
    }
  },
})

export const {
  addToCart, sendOrder,
  checkCartStorage, removeFromCart
} = cartSlice.actions