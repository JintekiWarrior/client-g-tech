import React, { useState } from 'react'
import { updateProduct } from './../../api/product'
import { useParams } from 'react-router-dom'
import ProductForm from './../ProductForm/ProductForm'

const UpdateProduct = ({ user }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [creator, setCreator] = useState('')
  const [genre, setGenre] = useState('')
  const [platform, setPlatform] = useState('')
  const [rating, setRating] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  let { id } = useParams()

  const onUpdateProduct = event => {
    event.preventDefault()
    const update = async () => {
      try {
        const res = await updateProduct(
          user,
          id,
          title,
          description,
          imageUrl,
          creator,
          genre,
          platform,
          rating,
          quantity,
          price
        )
        console.log('successfully updated', res.data)
      } catch (error) {
        console.log(error)
      }
    }

    update()
  }

  return (
    <ProductForm
      onSubmitProduct={onUpdateProduct}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      creator={creator}
      setCreator={setCreator}
      genre={genre}
      setGenre={setGenre}
      platform={platform}
      setPlatform={setPlatform}
      rating={rating}
      setRating={setRating}
      quantity={quantity}
      setQuantity={setQuantity}
      price={price}
      setPrice={setPrice}
    />
  )
}

export default UpdateProduct
