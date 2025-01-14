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
  render() {
    const markdownFiles = webpackMarkdownLoader
      .keys()
      .map((filename) => webpackMarkdownLoader(filename));

    const introMarkdown = markdownFiles[0];
    const pageTitle = "Gina Trapani - The Official Web Site";
    const tweetText = "Making stuff on the web";
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="card">
          <ReactMarkdown source={introMarkdown} />
        </div>
      </center>
    );
  }
}

export default App;
