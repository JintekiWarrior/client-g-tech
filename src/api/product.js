import apiUrl from './../apiConfig'
import axios from 'axios'

export const createProduct = (user, title, description) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/products',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      product: {
        productDetails: {
          title: title,
          description: description
        }
      }
    }
  })
}
