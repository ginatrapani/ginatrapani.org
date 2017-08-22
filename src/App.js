import React, { Component } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

const markdownFilePath = require("./md/index.md");

class App extends Component {
    state = {
        markdown: "Loading..."
    };

    componentWillMount() {
        fetch(markdownFilePath)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({ markdown: text });
            });
    }

    render() {
        const { markdown } = this.state;
        return (
            <center>
                <div className="card">
                    <ReactMarkdown source={markdown} />
                </div>
            </center>
        );
    }
}

export default App;
