import React from 'react';
import PropTypes from 'prop-types';

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    Test() {
        console.log("Hallo")
    }
    render() {
        return (
            <div>
                <h1>Hallo Home</h1>
                <button onClick={() => this.Test()}>Hallo</button>
            </div>
        );
    }
}

// homePageComponent.propTypes = {};

export default HomePageComponent;
