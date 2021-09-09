import React from 'react'
import Button from '@material-ui/core/Button'
import { deleteProduct } from './../../api/product'

const DeleteProduct = ({ user, productId }) => {

  const onDeleteProduct = event => {
    event.preventDefault()
    const onDelete = async () => {
      try {
        const res = await deleteProduct(user, productId)
        console.log('successfully deleted', res)
      } catch (error) {
        console.log(error)
      }
    }
    onDelete()
  }

  return (
    <Button
      onClick={onDeleteProduct}
    >
      Delete
    </Button>
  )
}

export default DeleteProduct
