import axios from 'axios'


const api = axios.create({
    baseURL: 'https://mobileshop.hungvu.net',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 60000
});


  export function getProducts (params) {
      return api.get('/get-products', {params})
  }

  export const getDetail = (productId) => api.get(`product/${productId}`)

  export function getCategory () {
      return api.get('/get-categories')
  }
  export function getComments (productId) {
      return api.get(`/get-product-comments/${productId}`)
  }
  export function postComments (params) {
      return api.post(`/create-comment`, params)
  }