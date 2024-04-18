import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps ={
    country : 'in',
    pageSize : 6,
    category : 'general'
  }
  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number, 
    category : PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page : 1,
    }
    document.title = `DailyNEWS ${this.props.category}`
  }
  
  async updateNews (){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b933af9d875040a7b01b3e5e85d33003&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResult:parsedData.totalResults , loading:false})    
  }

  async componentDidMount(){
    this.updateNews()
  }

  handlePrev= async()=>{
    this.setState({page : this.state.page -1});
    this.updateNews ()
  }

  handleNext= async()=>{
    this.setState({page : this.state.page +1});
    this.updateNews ()
  }
    
  

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'60px'}}  ><b>DailyNews</b> - Top {this.props.category} Headlines</h1>
          {this.state.loading && <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading..</span>
          </div>
          </div>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
            <NewsItem
              title={element.title?element.title:""}
              description={element.description?element.description:"" }
              imgUrl={element.urlToImage?element.urlToImage:"https://cdn.ndtv.com/common/images/ogndtv.png"}
              newsUrl= {element.url} 
              source = {element.source.name}
              author = {element.author}
              date = {element.publishedAt}
            />
          </div>
        })}
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}
