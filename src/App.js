import React, { Component } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

// Use raw-loader as per https://github.com/facebookincubator/create-react-app/issues/2961#issuecomment-333905542
const webpackMarkdownLoader = require.context(
  "!raw-loader!./md",
  false,
  /\.md$/
);
class App extends Component {
  state = {
    isOpen: false
  };

  handleMoreClick = event => {
    event.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    const markdownFiles = webpackMarkdownLoader
      .keys()
      .map(filename => webpackMarkdownLoader(filename));

    const archiveMarkdown = markdownFiles[0];
    const introMarkdown = markdownFiles[1];
    const recentlyMarkdown = markdownFiles[2];

    const { isOpen } = this.state;

    const pageTitle = "Gina Trapani - The Official Web Site";
    const tweetText =
      "Managing Partner at Postlight. Founded Lifehacker, ThinkUp, Makerbase. Always building or writing something online.";
    const siteImage =
      "https://1.gravatar.com/avatar/44230311a3dcd684b6c5f81bf2ec9f60?s=200&amp;d=mm&amp;r=g";
    const siteUrl = "https://ginatrapani.org/";
    return (
      <center>
        <Helmet>
          <title>{pageTitle}</title>
          <meta itemprop="name" content={pageTitle} />
          <meta itemprop="description" content={tweetText} />
          <meta itemprop="image" content={siteImage} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={siteImage} />
          <meta property="og:site_name" content={pageTitle} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={tweetText} />
          <meta name="twitter:image" content={siteImage} />
          <meta name="twitter:url" content={siteUrl} />
        </Helmet>
        <div className="card">
          <ReactMarkdown source={introMarkdown} />
          <ReactMarkdown source={recentlyMarkdown} />
          {!isOpen && (
            <div className="more">
              <a href="/" onClick={this.handleMoreClick} className="moreClick">
                See (much, much) more...
              </a>
            </div>
          )}
          {isOpen && <ReactMarkdown source={archiveMarkdown} />}
          <hr className="footer" />
          <div className="footerQuote">
            &quot;If I had more time, I would have written a shorter
            letter.&quot;
          </div>
        </div>
      </center>
    );
  }
}

export default App;
