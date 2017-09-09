import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  textAlign: 'center',
  textDecoration: 'underline'
}

const NotFound = () => {
  return (
    <div style={styles}>
    <h1> No Page Found</h1>
    <Link to='/'> Go to Home Page </Link>
    </div>
  )
}

export default NotFound