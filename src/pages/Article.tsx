import React, { Component } from "react";
import { RouteComponentProps, match } from "react-router-dom";
import "./Articles.scss";
import Navbar from "../components/layout/Navbar";
import Spinner from "../components/Spinner";

// let CurrentArticle = React.lazy(() => import('./articles/test'));
let CurrentArticle: React.LazyExoticComponent<React.ComponentType<any>>;

interface ArticleProps extends RouteComponentProps {
  match: match<{ name: string }>;
}

export default class Article extends Component<ArticleProps> {
  articleName = "";

  constructor(props: ArticleProps) {
    super(props);

    this.articleName = this.props.match.params.name;

    CurrentArticle = React.lazy(() =>
      import(`./articles/${this.articleName.trim()}`)
    );
  }

  render() {
    return (
      <div className="article">
        <div className="main">
          <header className="container">
            <Navbar color="#fff" />
            <h1 id="title">
              {this.articleName.replace(/--/g, ": ").replace(/-/g, " ")}
            </h1>
          </header>

          <div className="container">
            <div className="content">
              <div id="article">
                <React.Suspense fallback={<Spinner />}>
                  <CurrentArticle title={this.articleName} />
                </React.Suspense>

                {/* <Markdown options={{
              forceBlock: true
            }} children={article.body} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
