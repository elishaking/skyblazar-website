import React, { Component } from 'react';
import './Articles.scss';
import Navbar from '../layout/Navbar';
import Spinner from '../Spinner';

// let CurrentArticle = React.lazy(() => import('./articles/test'));
let CurrentArticle;

export default class Article extends Component {

  constructor(props) {
    super(props);

    this.articleName = this.props.match.params.name;

    CurrentArticle = React.lazy(() => import(`./articles/${this.articleName.trim()}`));
  }

  render() {
    return (
      <div className="article">
        <div className="main">
          <header className="container">
            <Navbar white={true} />
            <h1 id="title">{this.articleName.replace(/-/g, " ")}</h1>
          </header>

          <div className="container">
            <div className="content">
              <div id="article">
                <React.Suspense fallback={(<Spinner />)}>
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
    )
  }
}
