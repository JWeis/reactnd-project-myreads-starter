import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import search from './search'
import Main from './main'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={search} />
        <Route exact path="/" component={Main} />
      </div>
      )
    }
  }

export default BooksApp