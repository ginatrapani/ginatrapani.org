import React, { Component } from "react";
import headshot from "./imgs/gtrapani_square_160.jpg";

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <h2>Hello!</h2>
                <p>
                    <a href="http://www.flickr.com/photos/ginatrapani/5215556717/">
                        <img src={headshot} alt="Gina Trapani" />
                    </a>I'm Gina Trapani. I build apps and web sites, and I like
                    to write about the intersection of life and technology.
                </p>

                <p>
                    At work, I'm a Partner and Director of Engineering at{" "}
                    <a href="https://postlight.com">Postlight</a>, a digital
                    product studio in New York City. Before Postlight, I founded
                    sites and services like Makerbase, an IMDb for digital
                    projects (acquired by Fog Creek), and{" "}
                    <a href="http://www.nytimes.com/2015/01/01/technology/personaltech/thinkup-helps-the-social-network-user-see-the-online-self.html?_r=0">
                        ThinkUp
                    </a>, a social media analytics tool.
                </p>

                <p>
                    I'm probably best known for being the founding editor of{" "}
                    <a href="http://lifehacker.com">Lifehacker</a> (acquired by
                    Univision), and the author of the{" "}
                    <a href="http://lifehackerbook.com">Lifehacker book</a>. I
                    also created <a href="http://todotxt.com">Todo.txt</a>, an
                    open source collection of text-based task list apps, and{" "}
                    <a href="http://narrowthegapp.com">Narrow the Gapp</a>, a
                    web site about the gender pay gap. I'm{" "}
                    <a href="http://twitter.com/ginatrapani">@ginatrapani</a> on
                    Twitter, one of <i>The New York Times</i>' "<a href="http://www.nytimes.com/2010/01/03/weekinreview/03carr-sidebar.html?ref=weekinreview">
                        Nine to Follow Among Millions
                    </a>."
                </p>

                <p>
                    Here's <a href="bio.html">my formal, complete bio</a>. Some
                    nice strangers also wrote{" "}
                    <a href="http://en.wikipedia.org/wiki/Gina_Trapani">
                        a Wikipedia page about me
                    </a>. To get in touch, you can send me an email to my usual
                    username at Gmail or{" "}
                    <a href="http://twitter.com/ginatrapani">tweet at me</a>.
                </p>
                <p>Thanks for stopping by.</p>
            </div>
        );
    }
}

export default Intro;
