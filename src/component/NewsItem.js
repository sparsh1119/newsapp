import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date , source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left : '90%',zIndex:'1'}}>
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unkown"} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target='blank' className="btn btn-primary" >
              Read in detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}
