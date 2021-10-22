import { useState } from "react";

function FilterButton(props) {
    const { setQuery } = props;
    const [queryNumber, SetQueryNumber] = useState(0)

    const queryDictionary = {
        0: "",
        1: "?sort_by=",
        2: "?order=",
        3: "?topic=",
    }

//     sort_by = 'created_at',
//   order = 'desc',
//   topic,

    // sort_by (defaults to created_at)
    // order (defaults to desc) can be 'asc' or 'desc']
    // topic
    // //
    // 'created_at',
    // 'votes',
    // 'title',
    // 'comment_count',

    function handleClick() {
        const queryString = queryDictionary[3]+"cooking";
        console.log(queryString);
        setQuery(queryString);
    }
    return (
        <button 
        key="toolbar-filter-button" 
        className="toolbar-filter-button"
        onClick={(e)=>{handleClick()}}
        >{`<`}</button>
    );
}

export default FilterButton;