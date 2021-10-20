import { buildQueries } from "@testing-library/react";
import { useState } from "react";

function TopicButton(props) {
    const { slug, setSelectedTopic } = props;

    function handleClick(slug) {
        setSelectedTopic((currTopic) => {
          return [slug]
        })
      }

    return (
        <button 
        key={`toolbar-topic-button-${slug}`} 
        className="toolbar-topic-button"
        onClick = {(e) => { handleClick(slug)}}
        >{slug}</button>
    );
}

export default TopicButton;