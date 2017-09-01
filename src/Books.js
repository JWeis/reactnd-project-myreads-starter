import React, { Component } from 'react'
import Book from './book'

class Books extends Component{

  render() {
    return (
      <div>
      {this.props.books.map((book) => (
        <Book
          book={book} 
          id={book.id} 
          imageLinks={book.imageLinks.thumbnail}
          title={book.title}
          authors={book.authors}
          shelf={book.shelf}
          update={this.props.updateShelf}
          />
        ))}
      </div>
    )
  }
}

export default Books


