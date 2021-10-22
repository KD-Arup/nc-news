import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCaretUp, 
    faSortAmountUpAlt,
    faSortAmountUp,
    faComments,} from '@fortawesome/free-solid-svg-icons';

function FilterButton(props) {
    const { setQuery, order, setOrder } = props;
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
        console.log('clicked')
        setOrder((curOrder)=>{
            if(curOrder === 'desc'){
                return 'asc'
            } else {
                return 'desc'
            }
        })
    }
    //return (
    {if (order === 'desc') {
        return (
            <button key="toolbar-filter-button" onClick={(e)=>{handleClick()}}>
                <FontAwesomeIcon icon={faSortAmountUp}
                key="toolbar-filter-button" 
                className="toolbar-filter-button"
                />
            </button>
        )
    } else {
        return (
            <button key="toolbar-filter-button" onClick={(e)=>{handleClick()}}>
                <FontAwesomeIcon icon={faSortAmountUpAlt}
                key="toolbar-filter-button" 
                className="toolbar-filter-button"
                />
            </button>
        )
    }}
}

export default FilterButton;