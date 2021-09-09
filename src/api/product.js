import apiUrl from './../apiConfig'
import axios from 'axios'

export const createProduct = (
  user,
  title,
  description,
  imageUrl,
  creator,
  genre,
  platform,
  rating,
  quantity,
  price
) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/products',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      product: {
        productDetails: {
          title,
          description,
          imageUrl,
          creator,
          genre,
          platform,
          rating
        },
        purchaseDetails: {
          quantity,
          price
        }
      }
    }
  })
}

export const indexProducts = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products'
  })
}

export const updateProduct = (
  user,
  productId,
  title,
  description,
  imageUrl,
  creator,
  genre,
  platform,
  rating,
  quantity,
  price
) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/products/' + productId,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      product: {
        productDetails: {
          title,
          description,
          imageUrl,
          creator,
          genre,
          platform,
          rating
        },
        purchaseDetails: {
          quantity,
          price
        }
      }
    }
  })
}

export const deleteProduct = (user, productId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/products/' + productId,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
