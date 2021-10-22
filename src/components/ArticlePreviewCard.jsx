import { Link, useParams } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function ArticlePreviewCard(props) {
    const { article } = props
    const { article_id } = useParams();
    return (
        <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none' }}>
        <div className="article-preview-card" key={`Preview_${article.title}_${article.article_id}`}>
            <div className="article-heading" key="article-heading" >{article.title}</div>
            <div className="article-body" key="article-body" ><p>{"First handful of words as preview, second handful of words as preview, third handful of words as preview, fourth handful of words as preview, fifth handful of words as preview..."}</p></div>
            <div className="article-preview-buttons-container" key="article-preview-buttons-container">
                <div className="votes-container" key="votes-container">
                    <div className="up-vote-icon"><FontAwesomeIcon icon={faCaretUp} /></div>
                    <div className="votes-value">{` ${article.votes} `}</div>
                    <div className="down-vote-icon"><FontAwesomeIcon icon={faCaretDown} /></div>
                </div>
                <div className="comments-container" key="comments-container" >
                    {article.comment_count}
                </div>
                <div className="bookmark-container" key="bookmark-container" >
                    {`bookmark`}
                </div>
            </div>
        </div>
        </Link>
    );
}

export default ArticlePreviewCard;