import React, { useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {

//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general"
//   }

//   static propTypes = {
//     county: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalizeFirstLetter(props.category)} - KalTak NeWs`;
//   }


//   async updateNews() {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     console.log(parsedData);
//     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
//     props.setProgress(100);
//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c60e0b343a04a20a5cd25510843e5a1&page=1&pageSize=${props.pageSize}`;
//     // this.setState({loading: true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
//     this.updateNews();
//   }

//   handlePreviousClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c60e0b343a04a20a5cd25510843e5a1&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//     // this.setState({loading: true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // })
//     this.setState({
//       page: this.state.page - 1
//     })
//     this.updateNews();
//   }

//   handleNextClick = async () => {
//     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
//       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c60e0b343a04a20a5cd25510843e5a1&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//       // this.setState({loading: true});
//       // let data = await fetch(url);
//       // let parsedData = await data.json();
//       // this.setState({
//       //   page: this.state.page + 1,
//       //   articles: parsedData.articles,
//       //   loading: false
//       // })
//       this.setState({
//         page: this.state.page + 1
//       })
//       this.updateNews();
//     }
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 })
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false
//     });
//   };


//   render() {
//     return (
//       <div className="container my-3">
//         <h2 className='ms-4 text-center'>KalTak NeWs - Top Headlines From {this.capitalizeFirstLetter(props.category)} Category</h2>

//         {/* This Syntax Means that if the loading is true than we have to show the Spinner  */}
//         {this.state.loading && <Spinner />}


//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {/* old code  without the infinte scroll bar*/}
//               {/* {!this.state.loading && this.state.articles.map((element) => {
//               return <div className="col-md-4" key={element.url}>
//                 <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
//               </div>
//             })} */}

//               {this.state.articles.map((element) => {
//                 return <div className="col-md-4" key={element.url}>
//                   <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
//                 </div>
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* old code before infinte scroll  */}
//         {/* <div className="container d-flex justify-content-between my-3">
//             <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-md" onClick={this.handlePreviousClick}>&larr; previous</button>
//             <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))} type="button" className="btn btn-dark btn-md" onClick={this.handleNextClick}>next &rarr;</button>
//           </div> */}
//       </div>

//     )
//   }
// }

// export default News


const News = (props) =>{

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews =  async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - KalTak NeWs`;
    updateNews();
    //  eslint-disable-next-line
  }, []) 

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };


    return (
      <div className="container my-3">
        <h2 className='ms-4 text-center' style={{marginTop: '90px'}}>KalTak NeWs - Top Headlines From {capitalizeFirstLetter(props.category)} Category</h2>

        {/* This Syntax Means that if the loading is true than we have to show the Spinner  */}
        {loading && <Spinner />}


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">


              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>

    )
}


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}

News.propTypes = {
  county: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News

