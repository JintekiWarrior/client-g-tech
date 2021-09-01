import React, { Fragment, useState } from 'react'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  menu: {
    marginTop: '3em'
  }
})

const DropDown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <Button color="inherit" onClick={handleClick}>
        admin
      </Button>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>{props.children}</MenuItem>
      </Menu>
    </Fragment>
  )
}

export default DropDown
