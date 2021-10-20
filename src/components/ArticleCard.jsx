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
                    <div className="article-bookmark-button-container">
                        <button className="article-bookmark-button">Bookmark this article</button>
                    </div>
                </div>
                <div>
                    <p className="full-article-body">{article.body}</p>
                </div>
            </div>
            <div className="article-vote-or-comment-container">
                <div className="voting-buttons-container">
                <button className="up-vote-button">up vote</button>
                <div className="votes-value">{`${article.votes} k`}</div>
                <button className="down-vote-button">down</button>
                </div>
                <div className="view-comments-button-container">
                    <button className="view-comments-button" >comments</button>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;