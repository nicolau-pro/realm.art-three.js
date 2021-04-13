import React, { Component } from 'react';

const USERS_URL = 'https://example.com/api/users';

class Table extends Component {
  state = {
    enablebuttons: false,
    count: null,
    results: null,
    currentPage: null,
    lastPage: null,
  };

  fetchPage = (page) => {
    this.setState({
      enablebuttons: false,
    });
    fetch(USERS_URL + '?page=' + page)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          count: data.count,
          results: data.results,
          currentPage: page,
          lastPage: Math.floor(data.count / 10),
          enablebuttons: true,
        });
      });
  };

  componentDidMount() {
    this.goToFirstPage();
  }

  goToFirstPage = () => {
    this.fetchPage(0);
  };

  goToPreviousPage = () => {
    if (this.state.currentPage > 0) this.fetchPage(this.state.currentPage - 1);
  };

  goToNextPage = () => {
    if (this.state.currentPage < this.state.lastPage) this.fetchPage(this.state.currentPage + 1);
  };

  goToLastPage = () => {
    this.fetchPage(this.state.lastPage);
  };

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='column'> ID </th> <th scope='column'> First Name </th> <th scope='column'> Last Name </th>
            </tr>
          </thead>
          <tbody>
            {this.state.results
              ? this.state.results.map((person, index) => (
                  <tr key={index}>
                    <th scope='row'> {person.id} </th> <td> {person.firstName} </td> <td> {person.lastName} </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <section className='pagination'>
          <button disabled={!this.state.enablebuttons || this.state.currentPage === 0} className='first-page-btn' onClick={this.goToFirstPage}>
            first
          </button>
          <button disabled={!this.state.enablebuttons || this.state.currentPage === 0} className='previous-page-btn' onClick={this.goToPreviousPage}>
            previous
          </button>
          <button
            disabled={!this.state.enablebuttons || this.state.currentPage === this.state.lastPage}
            className='next-page-btn'
            onClick={this.goToNextPage}>
            next
          </button>
          <button
            disabled={!this.state.enablebuttons || this.state.currentPage === this.state.lastPage}
            className='last-page-btn'
            onClick={this.goToLastPage}>
            last
          </button>
        </section>
      </div>
    );
  }
}

export default Table;
