import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title , description,urlToImage, author, date, newsUrl, source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}} > 
                <span className=" badge rounded-pill bg-danger" >{source}</span>
                </div>
                <img src= {!urlToImage?"https://static.news.bitcoin.com/wp-content/uploads/2021/09/crypto-market-values-nosedive-amid-global-market-meltdown-widening-default-risks.jpg":urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success"> By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href= {newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div> 
            </div>
            
        )
    }
    
}

export default NewsItems
