import React from 'react';
import {Helmet} from 'react-helmet';

class Home extends React.Component {
    head() {
        return (
            <Helmet>
                <title>My page title</title>
            </Helmet>
        )
    }
    render() {
        return (
            <div>
                {this.head()}
                <h1>SSR SPA App</h1>
                <p>Some text</p>
            </div>
        )
    }
}

export default Home;