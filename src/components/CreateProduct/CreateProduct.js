import React, { useState } from 'react'
import { createProduct } from './../../api/product'

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

const CreateProduct = ({ user }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const classes = useStyles()

  const onCreateProduct = event => {
    event.preventDefault()
    const create = async () => {
      try {
        const res = await createProduct(user, title, description)
        console.log('successfully created', res.data)
      } catch (error) {
        console.log(error)
      }
    }

    create()
  }

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

export default CreateProduct
