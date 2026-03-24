import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: {
      id: "",
      name: "",
      description: "",
      price: "",
      image: "",
      show: false,
      isHotOffer: false,
      isDeleted: false
    }
  },
  reducers: {
    setProduct: (state, data) => {
      let item = data.payload
      state.value.id = item.id
      state.value.name = item.name;
      state.value.description = item.description;
      state.value.price = item.price;
      state.value.image = item.image;
      state.value.show = true;
    },
    setNomenc: (state, data) => {
      let item = data.payload
      state.value.id = item.id;
      state.value.name = item.name;
      state.value.description = item.description;
      state.value.price = item.price;
      state.value.image = item.image;
      state.value.isHotOffer = item.isHotOffer;
      state.value.isDeleted = item.isDeleted;
    },
    clearNomenc: (state) => {
      state.value = {
        id: "",
        name: '',
        description: '',
        price: '',
        image: '',
        show: false,
        isHotOffer: false,
        isDeleted: false
      }
    },
    setName: (state, data) => {
      state.value.name = data.payload;
    },
    setPrice: (state, data) => {
      state.value.price = data.payload;
    },
    setImage: (state, data) => {
      state.value.image = data.payload;
    },
    setDescr: (state, data) => {
      state.value.description = data.payload;
    },
    setHot: (state, data) => {
      state.value.isHotOffer = data.payload;
    },
    setDeleted: (state, data) => {
      state.value.isDeleted = data.payload;
    },
    hidePopup: (state) => {
      state.value.show = false;
    }
  }
})

export const {
  setProduct,
  setNomenc,
  hidePopup,
  clearNomenc,
  setName,
  setPrice,
  setImage,
  setDescr,
  setHot,
  setDeleted
} = productSlice.actions