import React, { Component } from "react";
import API from "../utils/API";
import "./SavedBooks.css";

class SavedBooks extends Component {
  state = {
    saved: []
  };
  
  componentDidMount() {
    this.displayBooks();
  };

  formatDate = value => {
    return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear();
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.displayBooks())
      .catch(err => console.log(err));
  };
  
  displayBooks = () => {
    API.getBooks()
    .then(res => { 
      this.setState({ saved: res.data }) 
      console.log(res.data)
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />

          <div className="card">
            {/* Card Header */}
            <div className="card-header">
              <strong>
                <i className="fa fa-table"></i> Saved Books
              </strong>
            </div>

            {/* Saved Books */}
            <div className="card-body" id="saved-section">
              {this.state.saved.map(headlines => 
                <div key={headlines._id} className="saved-Books alert alert-primary" role="alert">
                  <a href={headlines.url} target="_blank">{headlines.title}</a>
                  <span>Article Date: {this.formatDate(new Date(headlines.date))}</span>
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => this.deleteArticle(headlines._id)}
                    >Remove</button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    );
  };
}

export default SavedBooks;
