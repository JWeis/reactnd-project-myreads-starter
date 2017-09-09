import React from 'react'
import Bookshelf from './Bookshelf'
import Search from './Search'
import { Route, Link, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import NotFound from './NotFound'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateCategory = (book, category) => {
    BooksAPI.update(book, category)
    book.shelf = category
    this.setState({ books: this.state.books.filter(b => b.id !== book.id).concat([ book ]) })
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>James Reads</h1>
            </div>
            <Switch>
            <Route exact path='/' render={() => (
              <Bookshelf update={this.updateCategory} books={this.state.books} />
            )}/>
            <Route path='/search' render={() => (
              <Search update={this.updateCategory} currentBooks={this.state.books}/>
            )} />
            <Route component={NotFound} />
            </Switch>

            <div className="open-search">
              <Link to='/search'> Add a book </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
