import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TopicButton from "./TopicButton";
import FilterButton from "./FilterButton";
import ArticlePreviewCard from './ArticlePreviewCard';

import axios from "axios"

function ArticleListDisplay(props) {
    const { topics, setTopics } = props;

    const testArticles = { "articles": [
        {
          "article_id": 33,
          "title": "Seafood substitutions are increasing",
          "topic": "cooking",
          "author": "weegembump",
          "body": "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
          "created_at": "2018-05-30T15:59:13.341Z",
          "votes": 44,
          "comment_count": "6"
        },
        {
          "article_id": 28,
          "title": "High Altitude Cooking",
          "topic": "cooking",
          "author": "happyamy2016",
          "body": "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.",
          "created_at": "2018-05-27T03:32:28.514Z",
          "votes": 1000,
          "comment_count": "5"
        },
        {
            "article_id": 28,
            "title": "High Altitude Cooking",
            "topic": "cooking",
            "author": "happyamy2016",
            "body": "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.",
            "created_at": "2018-05-27T03:32:28.514Z",
            "votes": 1000,
            "comment_count": "5"
        },
        {
          "article_id": 30,
          "title": "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
          "topic": "cooking",
          "author": "jessjelly",
          "body": "What if, for once, your Thanksgiving sides were just as dazzling as the centerpiece turkey? Imagine a world where presenting a platter of seasonal vegetables inspires the same amount of cooing that the turkey does. Welcome to the world of twice-baked butternut squash. Sure, you could just roast some squash wedges and call it a day. But where's the fun in that? To make this year's most impressive vegetable side, Epi's food director Rhoda Boone gave super-seasonal butternut squash the twice-baked potatoes treatment: Mash the inside of the vegetable with butter, cream, and anything else that might make it more delicious, then pile it back into the vegetable, bake it until golden and velvety. The result is a jaw-dropping, brightly colored sweet-meet-savory butternut squash side dish. Here are just a few more reasons this creation belongs on this year's Thanksgiving table:",
          "created_at": "2018-05-06T02:40:35.489Z",
          "votes": 23000,
          "comment_count": "8"
        }]
    }

    const [articles, setArticles] = useState(testArticles.articles); 

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
                    <Link to="/basket">
                        <TopicButton name={topic.slug}/>
                    </Link>
                )
            })}
            </div>
            <div className="filter-button-container">
                <FilterButton/>
            </div>
        </section>
        <section className="article-list-display-container">
            <div className="article-list-container">
                {articles.map((article) => {
                    return (
                    <ArticlePreviewCard article={article}/>
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