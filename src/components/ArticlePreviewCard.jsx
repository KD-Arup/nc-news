import { Link, useParams } from 'react-router-dom';

function ArticlePreviewCard(props) {
    const { article } = props
    const { article_id } = useParams();
    return (
        <Link to={`/articles/${article.article_id}`}>
        <div className="article-preview-card" key={`Preview_${article.title}_${article.article_id}`}>
            <div className="article-heading" key="article-heading" >{article.title}</div>
            <div className="article-body" key="article-body" ><p>{"First handful of words as preview, second handful of words as preview, third handful of words as preview, fourth handful of words as preview, fifth handful of words as preview..."}</p></div>
            <div className="article-preview-buttons-container" key="article-preview-buttons-container">
                <div className="votes-container" key="votes-container">{article.votes}</div>
                <div className="comments-container" key="comments-container" >{article.comment_count}</div>
                <div className="bookmark-container" key="bookmark-container" >{`bookmark`}</div>
            </div>
        </div>
        </Link>
    );
}

export default ArticlePreviewCard;