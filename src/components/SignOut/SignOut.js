import { useEffect } from 'react'
import { signOut } from './../../api/auth'
import { withRouter } from 'react-router-dom'

const SignOut = ({ user, setIsAdmin, clearUser, history }) => {
  useEffect(() => {
    const onSignOut = () => {
      const deleteUser = async () => {
        try {
          signOut(user)
          clearUser()
          setIsAdmin(false)
          history.push('/')
        } catch (error) {
          console.log('error')
        }
      }

      deleteUser()
    }

    onSignOut()
  })

  return null
}

export default withRouter(SignOut)
