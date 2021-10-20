import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TopicButton from "./TopicButton";
import FilterButton from "./FilterButton";
import ArticlePreviewCard from './ArticlePreviewCard';

import axios from "axios"

function ArticleListDisplay(props) {
    const { topics, setTopics } = props;

    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        axios.get('https://kd-nc-news.herokuapp.com/api/topics')
        .then((response) => {
            console.log(response);
            setTopics((currTopics) => {
                const newTopics = [...response.data.topics];
                return newTopics;
                // return response.data.categories;
                // const topicsFilterObj = {};
                // newTopics.map((element) => {
                //     console.log(element);
                //     topicsFilterObj[element.slug] = true;
                // })
                // return topicsFilterObj;
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        axios.get('https://kd-nc-news.herokuapp.com/api/articles')
        .then((response) => {
            console.log(response);
            setArticles((curArticles) => {
                return response.data.articles
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
        <section className="toolbar-container">
            <div className="topic-buttons-container">
            {topics.map((topic) => {
                return (
                    // <Link to="/basket">
                    <Link to="/selected-topic">
                        <TopicButton key={`${topic.slug}-topic-button`} slug={topic.slug}/>
                    </Link>
                )
            })}
            </div>
            <div className="filter-button-container">
                <FilterButton/>
            </div>
        </section>
        <section className="article-list-display-container" key="article-list-display-container">
            <div className="article-list-container" key="article-list-container">
                {articles.map((article) => {
                    return (
                            <ArticlePreviewCard key={`comp-Preview_${article.title}_${article.article_id}`} article={article}/>
                    )
                })}
            </div>
            <div className="view-more-articles-container">
                <button className="view-more-articles-button">{`View more >`}</button>
            </div>
        </section>
        </>
    );
}

export default ArticleListDisplay;