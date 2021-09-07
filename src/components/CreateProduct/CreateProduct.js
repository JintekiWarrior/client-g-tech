import React, { useState } from 'react'
import { createProduct } from './../../api/product'
import ProductForm from './../ProductForm/ProductForm'

const CreateProduct = ({ user }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [creator, setCreator] = useState('')
  const [genre, setGenre] = useState('')
  const [platform, setPlatform] = useState('')
  const [rating, setRating] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const onCreateProduct = event => {
    event.preventDefault()
    const create = async () => {
      try {
        const res = await createProduct(
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
        )
        console.log('successfully created', res.data)
      } catch (error) {
        console.log(error)
      }
    }

    create()
  }

  return (
    <ProductForm
      onCreateProduct={onCreateProduct}
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

export default CreateProduct
