import React, { Component } from 'react'

export class NewsItem extends Component {
     
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: '90%', zIndex: '1'}}>{source}</span>
            <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107090863-1658245353699-NUP_198367_01036_copy.jpg?v=1674483596&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>  
      </div>
    )
  }
}


export default NewsItem