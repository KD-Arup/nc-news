function ArticleCard(props) {
    const { article } = props
    return (
        <div>
            <div className="article-card" key={`${article.title}_${article.article_id}`}>
                <div className="article-heading">{article.title}</div>
                <div className="article-info-container" >
                    <div className="article-author-date-container">
                        <p>{article.author}</p>
                        <p>{`NC News`}</p>
                        <p>{article.created_at}</p>
                    </div>
                    <button>Bookmark this article</button>
                </div>
                <div>
                    <p>{article.body}</p>
                </div>
            </div>
            <div className="article-vote-or-comment-container">
                <button></button>
                <button></button>
            </div>
            <div className="next-article-button-container">
                <button className="next-article-button">Next article</button>
            </div>
        </div>
    );
}

export default ArticleCard;