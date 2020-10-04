import React from 'react'

const HOME_STYLES = {
    maincontainer: {
        left: 55,
        top: 0,
        position: 'absolute',
        height: '100vh',
        width: '100% - 55',
    },
    headings: {
        position: 'relative',
        left: 10,
        color: '#fefefe',
    }
}
class Home extends React.Component {
    render = () => {
        return(
            <div style={HOME_STYLES.maincontainer}>
                <div style={HOME_STYLES.headings}>
                    <h1>Hi! I'm Mike</h1>
                    <p>I make stuff with code.</p>
                </div>
            </div>
        );
    }
}

export default Home;