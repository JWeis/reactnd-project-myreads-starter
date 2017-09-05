import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Listbooks from './Listbooks'
import BooksAPI from './BooksAPI'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      storedBooks: []
    }
  }

  componentDidMount(){
    let books = BooksAPI.getAll()
      //this.setState({ books })
      //console.log('got books', books)
  }
  
  filterBooks = (shelf) => {
    const { books } = this.props
    return books.filter((book) => book.shelf === shelf)
    console.log(books)
  }

  render() {
    const { updateBookShelf } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Listbooks
              name="Currently Reading"
              books={ this.filterBooks('currentlyReading')}
              updateBookShelf={ updateBookShelf } />
            <Listbooks
              name="Want To Read"
              books={ this.filterBooks('wantToRead')}
              updateBookShelf={ updateBookShelf } />
            <Listbooks
              name="Read"
              books={ this.filterBooks('read')}
              updateBookShelf={ updateBookShelf } />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Main