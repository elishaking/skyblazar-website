import React, { Component } from 'react';
import './Articles.scss';
import Markdown from 'markdown-to-jsx';
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
            <h1 id="title">{this.articleName}</h1>
          </header>

          <div className="content">
            <React.Suspense fallback={(<Spinner />)}>
              <CurrentArticle title={this.articleName} />
            </React.Suspense>

            {/* <div id="article">
            <Markdown options={{
              forceBlock: true
            }} children={article.body} />
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
