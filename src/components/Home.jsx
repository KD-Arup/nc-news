import Header from "./Header";
import ArticleListDisplay from "./ArticleListDisplay";

import { useState } from "react";

function Home() {
    const [articles, setArticles] = useState([]);
    const [ query, setQuery ] = useState('');

    const [topics, setTopics] = useState([
        {
            "slug": "Loading",
            "description": "topics are loading"
        },
    ]);
    return (
        <div className="homepage-container">
            <Header query={query} setQuery={setQuery} />
            <ArticleListDisplay topics={topics} setTopics={setTopics} query={query} setQuery={setQuery} />
            <footer className="homepage-footer" >
                <div className='footer-links' ></div>
            </footer>
        </div>
    );
}

export default Home;
