import React from 'react'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  input: {
    marginBottom: '2rem'
  },

  paper: {
    padding: '2rem',
  }
})

const ProductForm = ({
  onCreateProduct,
  title,
  setTitle,
  description,
  setDescription,
  imageUrl,
  setImageUrl,
  creator,
  setCreator,
  genre,
  setGenre,
  platform,
  setPlatform,
  rating,
  setRating,
  quantity,
  setQuantity,
  price,
  setPrice
  }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Typography
        variant='h4'
        align='center'
      >
        Add a product
      </Typography>
      <form onSubmit={onCreateProduct}>
        <TextField
          className={classes.input}
          value={title}
          onChange={e => setTitle(e.target.value)}
          label="Title"
          color="primary"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          value={description}
          onChange={e => setDescription(e.target.value)}
          label="Description"
          color="primary"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
        />
        <TextField
          className={classes.input}
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          label="Image"
          color="primary"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          value={creator}
          onChange={e => setCreator(e.target.value)}
          label="Creator"
          color="primary"
          fullWidth
        />
        <TextField
          className={classes.input}
          value={genre}
          onChange={e => setGenre(e.target.value)}
          label="Genre"
          color="primary"
          fullWidth
        />
        <TextField
          className={classes.input}
          value={platform}
          onChange={e => setPlatform(e.target.value)}
          label="Platform"
          color="primary"
          fullWidth
        />
        <TextField
          className={classes.input}
          value={rating}
          onChange={e => setRating(e.target.value)}
          label="Rating"
          color="primary"
          fullWidth
        />
        <TextField
          className={classes.input}
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          label="Quantity"
          color="primary"
          fullWidth
        />
        <TextField
          className={classes.input}
          value={price}
          onChange={e => setPrice(e.target.value)}
          label="Price"
          color="primary"
          fullWidth
        />
        <Button
          variant='contained'
          color="primary"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default ProductForm
