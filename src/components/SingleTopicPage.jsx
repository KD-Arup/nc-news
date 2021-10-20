import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Header from "./Header";
import TopicButton from "./TopicButton";
import FilterButton from "./FilterButton";
import ArticlePreviewCard from './ArticlePreviewCard';

import axios from "axios"


function SingleTopicPage(props) {
    const { article_id } = props;

    const [article, setArticle] = useState([]); 

    useEffect(() => {
        axios.get(`/api/articles/${article_id}`)
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
        <div className="single-topic-page-container">
            <Header />
            <section className="article-view-container" key="article-view-container">
                <div className="selected-article-card" key="selected-article-card">
                    <ArticlePreviewCard key={`comp-selected_${article.title}_${article.article_id}`} article={article}/>
                </div>
                <div className="view-more-articles-container">
                    <button className="view-more-articles-button">{`View more >`}</button>
                </div>
            </section>
        </div>
    );
}

export default SingleTopicPage;
