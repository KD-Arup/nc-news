import Header from "./Header";
import ArticleListDisplay from "./ArticleListDisplay";

import { useState } from "react";

function Home() {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([
        {
            "slug": "Loading",
            "description": "topics are loading"
        },
    ]);
    return (
        <div className="homepage-container">
            <Header />
            <ArticleListDisplay topics={topics} setTopics={setTopics} />
            <footer className="homepage-footer" >
                <div className='footer-links' ></div>
            </footer>
        </div>
    );
}

export default Home;
