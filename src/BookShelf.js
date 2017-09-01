import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {
  state = {
    shelf: `${this.props.shelf}`
  }

  render(){
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Books updateShelf={this.props.updateShelf} books={this.props.books.filter(book => book.shelf === this.state.shelf)}/>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf