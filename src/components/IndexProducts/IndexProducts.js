import React, { Fragment, useState, useEffect } from 'react'
import { indexProducts } from './../../api/product'
import { Link as RouterLink } from 'react-router-dom'

// Material ui components
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core'

import DeleteProduct from './../DeleteProduct/DeleteProduct'

// images
// import imagePath from './../../images/Assassins-Creed-2.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: '20rem',
    maxHeight: '30rem',
    margin: '2rem auto'
  },
  mediaContainer: {
    maxWidth: '7rem',
    margin: '1rem auto'
  },

  media: {
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%'
  }
})

const IndexProducts = ({ user }) => {
  const [products, setProducts] = useState([])

  const classes = useStyles()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await indexProducts()
         setProducts(res.data.product)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])

  console.log(products)

  return (
    <Fragment>
      {products.map(product => (
        <Card className={classes.root} key={product._id}>
          <div className={classes.mediaContainer}>
            <img
              className={classes.media}
              src={`${process.env.PUBLIC_URL}/assets/images/${product.productDetails.imageUrl}.jpg`}
              alt={product.title}
            />
          </div>
          <CardContent>
            <Typography variant='h4' align='center'>
              {product.productDetails.title}
            </Typography>
            <Typography variant='body1' align='center'>
              {product.productDetails.description}
            </Typography>
          </CardContent>
          <Link
            component={RouterLink}
            to={`/update-product/${product._id}`}
          >
              Update
          </Link>
          <DeleteProduct
            user={user}
            productId={product._id}
          />
        </Card>
      ))}
    </Fragment>
  )
}

export default IndexProducts
