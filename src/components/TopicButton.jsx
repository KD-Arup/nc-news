import { useState } from "react";

function TopicButton(props) {
    const { slug } = props;

    const [ topic, setTopic ] = useState(slug);

    return (
        <button key={`toolbar-topic-button-${slug}`} className="toolbar-topic-button">{slug}</button>
    );
}

export default TopicButton;