import React from 'react';
import { Grid, Col } from 'rsuite';

const HOME_STYLES = {
    left_container: {
        left: 55,
        top: 0,
        position: 'fixed',
        height: '100vh',
        width: '60%',
        zIndex: -1
    },
    right_container: {
        right: 0,
        top: 0,
        position: 'fixed',
        height: '100vh',
        width: '40%',
        zIndex: -1
    },
    left_headings: {
        margin: 0,
        position: 'absolute',
        top: '25%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        color: '#b0c8d1'
    },
    left_top_h: {
        color: '#de1655',
    },
    left_mid_h: {
        color: '#59d0ff'
    }
}
class Home extends React.Component {
    render = () => {
        return(
            <div>
                <Grid fluid>
                    <Col md={12} xs={24}>
                    <div style={HOME_STYLES.left_container}>
                        <div style={HOME_STYLES.left_headings}>
                            <h3>Hi!</h3>
                            <h3 style={ HOME_STYLES.left_mid_h }>I'm Mike</h3>
                            <p>I make stuff with code.</p>
                        </div>
                    </div>
                    </Col>
                    <Col xs={24} md={12}>
                    <div style={HOME_STYLES.right_container}>

                    </div>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default Home;