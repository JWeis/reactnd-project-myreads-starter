import React, { Component } from 'react'


class Book extends Component {
  state = {
    shelf: `${this.props.book.shelf}`
  }
  
  handleChange = (e) => {
    const values = e.target.value
    this.setState({shelf: values})
    this.props.newCategory(this.props.book, values)
    //console.log(values)
  }
  render(){
    const { book } = this.props
    return(
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {book.imageLinks ? 
            <div className="book-cover" style={{ width: 128, height: 193, 
                backgroundImage: `url(${book.imageLinks.thumbnail})` }}>    
            </div>
              :
              <div className="book-cover" style={{ width: 128, height: 193, 
                backgroundImage: `url(../imgs/No_Cover.jpg)` }}>    
            </div>
            }
            <div className="book-shelf-changer">
            <form>
              <select value={this.state.shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </form>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors ? 
          <div className="book-authors">{book.authors.length > 1 ? book.authors.join(', '): book.authors}</div>
          :
          <div className="book-authors">No Author Found</div>
          }
        </div>
      </li>
    )
  }

}


export default Book