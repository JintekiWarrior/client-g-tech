import './App.scss'
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthRoute from './components/AuthRoute/AuthRoute'
import Navbar from './components/Navbar/Navbar'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import ChangePassword from './components/ChangePassword/ChangePassword'
import SignOut from './components/SignOut/SignOut'

// admin routes
import CreateProduct from './components/CreateProduct/CreateProduct'
import IndexProducts from './components/IndexProducts/IndexProducts'
import UpdateProduct from './components/UpdateProduct/UpdateProduct'

// material ui components
import Container from '@material-ui/core/Container'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      isAdmin: false
    }
  }

  setUser = user => this.setState({ user })
  setIsAdmin = value => {
    this.setState({ isAdmin: value })
    console.log('is admin set to: ', this.state.isAdmin)
  }

  clearUser = () => this.setState({ user: null })


  render () {
    const { user, isAdmin } = this.state

    return (
      <Fragment>
        <Navbar user={user} isAdmin={isAdmin} />
        <Container maxWidth="sm">
          <Route path='/sign-up' render={() => (
            <SignUp user={user} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn  user={user} setUser={this.setUser} setIsAdmin={this.setIsAdmin} />
          )} />
          <AuthRoute user={user} path='/change-password' render={() => (
            <ChangePassword user={user} />
          )} />
          <AuthRoute user={user} path='/sign-out' render={() => (
            <SignOut user={user} setIsAdmin={this.setIsAdmin} clearUser={this.clearUser} />
          )} />
          {/* Admin routes */}
          <AuthRoute user={user} path='/create-product' render={() => (
            <CreateProduct user={user} />
          )} />
          <AuthRoute user={user} path='/update-product/:id' render={() => (
            <UpdateProduct user={user} />
          )} />
          <AuthRoute user={user} path='/index-products' render={() => (
            <IndexProducts user={user} />
          )} />
        </Container>
      </Fragment>
    )
  }
}

export default App
