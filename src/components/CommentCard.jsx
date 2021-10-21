import { Link, useParams } from 'react-router-dom';

function CommentCard(props) {
    const { comment } = props

    return (
        <div className="article-preview-card" key={`comment-card-${comment.comment_id}`}>
            <div className="article-heading" key="article-heading" >{comment.author}</div>
            <div className="article-body" key="article-body" ><p>{comment.body}</p></div>
            <div className="article-preview-buttons-container" key="comment-buttons-container">
                <div className="votes-container" key="votes-container">{comment.votes}</div>
                <div className="comments-container" key="comments-container" >{comment.comment_id}</div>
                <div className="bookmark-container" key="bookmark-container" >{`bookmark`}</div>
            </div>
        </div>
    );
}

export default CommentCard;