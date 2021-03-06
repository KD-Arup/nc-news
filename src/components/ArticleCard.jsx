import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function ArticleCard(props) {
    const { article } = props;
    
    const [ articleVotes, setArticleVotes ] = useState(article.votes);
    /// api/articles/:article_id
    //

    function handleVote(upOrDownVote) {
        setArticleVotes((curArticleVotes) => {
            return (curArticleVotes + upOrDownVote) < 0 ? 0 : (curArticleVotes + upOrDownVote);
            });
        if ((articleVotes + upOrDownVote) > -1) {
            axios.patch(`https://kd-nc-news.herokuapp.com/api/articles/${article.article_id}`, { inc_votes: upOrDownVote })
            .then((response) => {
                // const confirmedVotes = response.data.article.votes;
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
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
                    <button 
                    className="up-vote-button"
                    onClick={(e)=> {handleVote(+1)}}
                    >up vote</button>
                <div className="votes-value">{`${articleVotes}`}
                </div>
                    <button 
                    className="down-vote-button"
                    onClick={(e)=> {handleVote(-1)}}
                    >down</button>
                </div>
                <Link to={`/articles/${article.article_id}/comments`}>
                    <div className="view-comments-button-container">
                        <button 
                            className="view-comments-button" 
                            >{`comments ${article.comment_count}`}</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ArticleCard;