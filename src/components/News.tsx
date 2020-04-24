import React from "react";
import { NewsContainer } from "../styles/components/News.styles";
import { ArticlesList } from "../data/articles";
import { Article } from "../types/types";

const News = (): JSX.Element => {
  return (
    <NewsContainer>
      <div className="wrapper">
        <div className="title-mobile">
          <h4 className="Section-title">LATEST NEWS</h4>
        </div>
        <div className="news">
          <h4 className="Section-title title">LATEST NEWS</h4>
          <div />
          {ArticlesList.map((article: Article) => (
            <div className="article" key={article.title}>
              <a
                href={article.url}
                className="title-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {article.title}
              </a>
              <p className="published-date">{article.published}</p>
            </div>
          ))}
        </div>
      </div>
    </NewsContainer>
  );
};

export default News;
