import React, { Component } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

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

        return (
            <center>
                <div className="card">
                    <ReactMarkdown source={introMarkdown} />
                    <ReactMarkdown source={recentlyMarkdown} />
                    {!isOpen && (
                        <div className="more">
                            <a
                                onClick={this.handleMoreClick}
                                className="moreClick"
                            >
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
