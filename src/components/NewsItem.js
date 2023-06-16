// import React, { Component } from 'react'

// export class NewsItem extends Component {

//   render() {
//     let {title, description, imageUrl, newsUrl, author, date} = this.props;
    
//     return (
//       <div className='my-4'>
//         <div className="card">
//           <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1206098096.jpg?resize=1200,633":imageUrl} className="card-img-top" alt="..." style={{height: "180px"}}/>
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
//             <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem


import React from 'react'

const NewsItem =(props) => {

    let {title, description, imageUrl, newsUrl, author, date} = props;
    
    return (
      <div className='my-4'>
        <div className="card">
          <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1206098096.jpg?resize=1200,633":imageUrl} className="card-img-top" alt="..." style={{height: "180px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem

