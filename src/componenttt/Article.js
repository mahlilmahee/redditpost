import React from 'react';
import './article.css'
const Article = (props) => {
    // const {title}=props.article;
    const title=props.data.data.title;
    // const permalink=props.data.data.permalink;
    return (
        <div className='divcolor'>
          <a href={ "https://reddit.com" + props.data.data.permalink } target="_blank">
          <h3>{title}</h3>
          </a>
        </div>
    );
};

export default Article;