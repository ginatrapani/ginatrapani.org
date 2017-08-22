import React, { Component } from "react";
import "./App.css";
import Intro from "./Intro.js";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>
                    <a href="/">Gina Trapani</a>
                </h1>
                <p>Developer &middot; Writer &middot; Founder</p>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <center>
                <div className="card">
                    <Header />
                    <Intro />
                </div>
            </center>
        );
    }
}

export default App;
