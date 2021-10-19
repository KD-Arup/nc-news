import { useState } from "react"
import TopicButton from "./TopicButton";
import FilterButton from "./FilterButton";

function Toolbar() {

    const testTopics = {
        topics: [

            {
                "slug": "coding",
                "description": "Code is love, code is life"
            },
            {
                "slug": "football",
                "description": "FOOTIE!"
            },
            {
                "slug": "cooking",
                "description": "Hey good looking, what you got cooking?"
            },
            {
                "slug": "coding",
                "description": "Code is love, code is life"
            },
            {
                "slug": "football",
                "description": "FOOTIE!"
            },
            {
                "slug": "cooking",
                "description": "Hey good looking, what you got cooking?"
            },
            {
                "slug": "coding",
                "description": "Code is love, code is life"
            },
            {
                "slug": "football",
                "description": "FOOTIE!"
            },
            {
                "slug": "cooking",
                "description": "Hey good looking, what you got cooking?"
            }
        ]
    }

    const [topics, setTopics] = useState(testTopics.topics)
    return (
        <section className="toolbar-container">
            <div className="topic-buttons-container">
            {topics.map((topic) => {
                return (
                <TopicButton name={topic.slug}/>
                )
            })}
            </div>
            <div className="filter-button-container">
                <FilterButton/>
            </div>
        </section>
    );
}

export default Toolbar;