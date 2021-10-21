import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import TopicButton from "./TopicButton";
import FilterButton from "./FilterButton";
// import ArticlePreviewCard from './ArticlePreviewCard';
import CommentCard from "./CommentCard";

import axios from "axios"

function CommentListDisplay(props) {
    const { topics, setTopics } = props;

    const [comments, setComments] = useState([]); 
    // const [selectedTopic, setSelectedTopic] = useState([]);

    const { article_id } = useParams();

    // useEffect(() => {
    //     axios.get('https://kd-nc-news.herokuapp.com/api/topics')
    //     .then((response) => {
    //         console.log(response);
    //         setTopics((currTopics) => {
    //             const newTopics = [...response.data.topics];
    //             return newTopics;
    //             // return response.data.categories;
    //             // const topicsFilterObj = {};
    //             // newTopics.map((element) => {
    //             //     console.log(element);
    //             //     topicsFilterObj[element.slug] = true;
    //             // })
    //             // return topicsFilterObj;
    //         });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    useEffect(() => {
        axios.get(`https://kd-nc-news.herokuapp.com/api/articles/${article_id}/comments`)
        .then((response) => {
            console.log(response);
            setComments((curArticles) => {
                return response.data.comments;
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, [article_id]);

    return (
        <>
        <section className="article-list-display-container" key="article-list-display-container">
            <div className="article-list-container" key="article-list-container">
                {comments.map((comment) => {
                    // if(selectedTopic.length > 0){
                    //     if(selectedTopic.includes(article.topic)){
                    //         return (<ArticlePreviewCard key={`comp-Preview_${article.title}_${article.article_id}`} article={article}/>)
                    //     }
                    // } else {
                        return (<CommentCard key={`comment-${comment.comment_id}-${comment.author}`} comment={comment} article_id={article_id}/>)
                    // }
                })}
            </div>
            <div className="view-more-articles-container">
                <button className="view-more-articles-button">{`View more >`}</button>
            </div>
        </section>
        </>
    );
}

export default CommentListDisplay;