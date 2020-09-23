// reducers/peopleReducer.js
import * as ActionTypes from '../actions/actionTypes';
const initialState = {
  // products: [{name: 'ip7', quantity: 0, id: 1223}]
  products: [],
  wishlist: [],
  previewlist: []
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_QUANTITY:
      const isExist = state.products.find(el => el._id === action.product._id)
      const data = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: action.product.quantity })
        }
        return e
      })
      return {
        products: isExist ? data : [...state.products, action.product],
      };
    case ActionTypes.ADD_CART:
      // kiểm tra xem sản phẩm đó đã có trong list cart chưa
      const isExistAddNew = state.products.find(el => el._id === action.product._id)
      // nếu có rồi thì tăng số quantity (số lượng) lên, dùng map để lặp qua các sản phầm,
      // nếu sản phẩm đó trùng với sản phẩm gửi lên thì tăng quantity
      const dataAddNew = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: Number(e.quantity) + 1 })
        }
        return e
      })
      // trả về store, nếu có sản phẩm trong list cart thì trả về cái đã đc tăng quantity
      // còn không thì thêm mới
      return {
        products: isExistAddNew ? dataAddNew : [...state.products, action.product],
      };
    case ActionTypes.REMOVE_PRODUCT:
      return {
        products: state.products.filter(p => p._id !== action.product._id),
      };
    // wish list
    case ActionTypes.ADD_WISH_LIST:
      // kiem tra no co trong list chua
      const isExistWl = state.wishlist.find(el => el._id === action.product._id)
      // neu co se tra ve item, ko co se tra ve undefined

      return {
        ...state,
        wishlist: isExistWl ? state.wishlist.filter(e => e._id !== action.product._id)
          : [...state.wishlist, action.product]
      };
    //  wishlist: isExistWl ? state.wishlist : [...state.wishlist, action.product]

    // List product Vừa xem
    case ActionTypes.ADD_PREVIEW_LIST:
       // kiem tra no co trong list chua
       const isExistPre = state.previewlist.find(el => el._id === action.product._id)
       
      return {
        ...state,
        previewlist: isExistPre ? [...state.previewlist]  : [...state.previewlist, action.product]
      };

    default:
      return state;
  }
}