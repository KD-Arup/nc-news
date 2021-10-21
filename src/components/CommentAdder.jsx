import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function CommentAdder(props) {
    const { article_id } = useParams();

    const defaultUser = {
        username: "jessjelly",
        avatarURL: "https://www.w3schools.com/w3images/avatar2.png",
        isSignedIn: true,
    }

    const [ user, setUser ] = useState(defaultUser);
    const [ newComment, setNewComment] = useState('');

    /// api/articles/:article_id
    //
    const handleSubmit = (event) => {
        event.preventDefault();
        const objToPost = { 
            "body": newComment,
            "username": user.username
        };
        console.log(objToPost);
        console.log(article_id);
        axios.post(`https://kd-nc-news.herokuapp.com/api/articles/${article_id}/comments`, objToPost)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="comment-editor-card" key="comment-editor-card">
                <div className="comment-heading">{`Commenting as ${user.username}`}</div>
                <form key='comment-editing-form' onSubmit={handleSubmit}>
                    <input 
                        className="comment-textbox"
                        key="comment-textbox"
                        value={newComment}
                        onChange={(e) => {setNewComment(e.target.value)}}
                    ></input>
                    <div className="back-to-comments-button-container">
                        <Link to={`/articles/${article_id}/comments`}>
                            <button 
                                className="back-to-comments-button">
                                    Back to comments
                            </button>
                        </Link>
                    </div>
                    <div className="post-comment-button-container">
                        <button 
                            className="post-comment-button"
                            onClick={handleSubmit}>
                                Post comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CommentAdder;