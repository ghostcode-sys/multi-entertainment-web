import React from 'react'
import NewsCard from './NewsCard'
const NewsComp = () => {
   
        return (
        <div>
            <h1 className="news_head">LATEST NEWS</h1>
            <div className="envelop">
                <NewsCard/>
            </div>
        </div>
    )
};

export default NewsComp
