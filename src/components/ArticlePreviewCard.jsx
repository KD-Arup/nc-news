function ArticlePreviewCard(props) {
    const { article } = props
    return (
        <div className="article-preview-card" key={`Preview_${article.title}_${article.article_id}`}>
            <div className="article-heading">{article.title}</div>
            <div className="article-body"><p>{"First handful of words as preview, second handful of words as preview, third handful of words as preview, fourth handful of words as preview, fifth handful of words as preview..."}</p></div>
            <div className="article-preview-buttons-container">
                <div className="votes-container" >{article.votes}</div>
                <div className="comments-container" >{article.comment_count}</div>
                <div className="bookmark-container" >{`bookmark`}</div>
            </div>
        </div>
    );
}

export default ArticlePreviewCard;