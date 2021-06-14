import React, { useEffect, useState } from 'react'

function NewsCard() {
    const [news, setnews] = useState("News here");

    useEffect(() => {
        var url = 'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2021-06-13&' +
            'sortBy=popularity&' +
            'apiKey=ffa36685e5d84d219a156a0810eeef94';

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                response.json().then((data) => {
                    const dnews = data.articles.map((art,index) => {
                        return (
                            <div className="card" key = {index}>

                                <div className="card_content">
                                    <img src={art.urlToImage} alt="" style={{ width: "100%", height: "33%" }} />
                                    <h3>{art.title}</h3>
                                    <br />
                                    <p>{art.description}</p>
                                </div>
                                <div className="card_bottom">
                                    <div>
                                    <span className="article_card">{art.author}</span>
                                    <span className="time_card">{art.publishedAt}</span>
                                    </div>
                                    <div>
                                    <span className="heart_card" ><i className="fas fa-heart"></i></span>
                                    <span className="share_card"><i className="fas fa-share-alt" style={{ color: "deepskyblue" }}></i></span>
                                    <span className="info_card"><i className="fas fa-info-circle"></i></span>
                                    <span className="info_card"><i className="fas fa-keyboard"></i></span>
                                </div></div>
                            </div>
                        )
                    })
                    setnews(dnews)
                })
            })
    }, []);
    return (
        <>
            {news}
        </>
    )
}

export default NewsCard

