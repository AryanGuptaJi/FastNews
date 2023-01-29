import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class New extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      // Use this when add articles in array
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7590a6c617f341e4b468b099a27121f1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{margin: '35px 0px'}}>Daily News - Top Headlines</h1>
        {/* <Spinner/> */}
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
               description={element.description ? element.description.slice(0, 80) : ""}
               imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
               date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button mz-3" className="btn btn-dark" onClick={this.handlePreviousClick}>
             &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button"
           className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default New
