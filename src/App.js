import React, { Component } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

const introMarkdown = require("./md/intro.md");
const recentlyMarkdown = require("./md/recently.md");
const archiveMarkdown = require("./md/archive.md");

class App extends Component {
    state = {
        introMarkdown: "Hello!...",
        recentlyMarkdown: "Recently...",
        archiveMarkdown: ""
    };

    componentWillMount() {
        fetch(introMarkdown)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({ introMarkdown: text });
            });
        fetch(recentlyMarkdown)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({ recentlyMarkdown: text });
            });
        fetch(archiveMarkdown)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({ archiveMarkdown: text });
            });
    }

    render() {
        const { introMarkdown, recentlyMarkdown, archiveMarkdown } = this.state;
        return (
            <center>
                <div className="card">
                    <img
                        className="avatar"
                        alt="Gina Trapani"
                        src="http://1.gravatar.com/avatar/44230311a3dcd684b6c5f81bf2ec9f60?s=200&amp;d=mm&amp;r=g"
                    />
                    <h1>
                        <a href="/">Gina Trapani</a>
                    </h1>
                    <p>Engineer &middot; Writer &middot; Founder</p>
                    <hr />
                    <ReactMarkdown source={introMarkdown} />
                    <ReactMarkdown source={recentlyMarkdown} />
                    <ReactMarkdown source={archiveMarkdown} />
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
