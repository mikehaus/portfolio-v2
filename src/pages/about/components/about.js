import React from 'react'

const ABOUT_STYLES = {
    maincontainer: {
        left: 55,
        top: 0,
        position: 'absolute',
        height: '100vh',
        width: '100% - 55',
    }
}

class About extends React.Component {
    render = () => {
        return(
            <div style={ABOUT_STYLES.maincontainer}>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;