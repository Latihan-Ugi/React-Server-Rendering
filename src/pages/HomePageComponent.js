import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet'

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    head(){
        return(
            <Helmet>
                <title>Home</title>
            </Helmet>
        )
    }
    
    Test() {
        console.log("Hallo")
    }
    render() {
        return (
            <div>
                {this.head()}
                <h1>Hallo Home</h1>
                <button onClick={() => this.Test()}>Hallo</button>
            </div>
        );
    }
}

// homePageComponent.propTypes = {};

export default HomePageComponent;
