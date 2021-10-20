import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import Header from "./Header";
import TopicButton from "./TopicButton";
import FilterButton from "./FilterButton";
import ArticleCard from './ArticleCard';

import axios from "axios"


function SingleTopicPage(props) {
    //const { article_id } = props;

    const [article, setArticle] = useState([]); 
    const { article_id } = useParams();

    useEffect(() => {
        axios.get(`https://kd-nc-news.herokuapp.com/api/articles/${article_id}`)
        .then((response) => {
            console.log(response);
            setArticle((curArticles) => {
                return response.data.article
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="single-article-page-container">
            <Header />
            <section className="article-view-container" key="article-view-container">
                <div className="selected-article-card" key="selected-article-card">
                    <ArticleCard key={`comp-selected_${article.title}_${article.article_id}`} article={article}/>
                </div>
                <div className="next-article-button-container">
                    <button className="next-article-button">{`Next article >`}</button>
                </div>
            </section>
        </div>
    );
}

export default SingleTopicPage;
