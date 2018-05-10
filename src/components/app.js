import React, { Component } from 'react';

import BookList from '../container/book_list';
import BookDetail from '../container/bookDetail'

export default class App extends Component {
  render() {
    return (
      <div>
       <BookList />
       <BookDetail />
      </div>
    );
  }
}
