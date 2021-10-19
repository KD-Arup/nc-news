function TopicButton(props) {
    const { name } = props;
    return (
        <button key={name} className="toolbar-topic-button">{name}</button>
    );
}

export default TopicButton;