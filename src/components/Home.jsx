import Header from "./Header";
import Toolbar from "./Toolbar";

import { useState } from "react";

function Home() {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState({misc: false});
    return (
        <div className="homepage-container">
            <Header />
            <Toolbar />
            {/* <ArticleDisplay /> */}
            {/* <ProductDisplay products={products} setProducts={setProducts} categories={categories} setCategories={setCategories}/> */}
            
            <footer className="homepage-footer" >
                <div className='footer-links' ></div>
            </footer>
        </div>
    );
}

export default Home;
