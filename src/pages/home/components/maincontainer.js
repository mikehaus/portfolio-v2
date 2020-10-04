import React from 'react';
import SideNav from './sidenav';
import Home from './home';
import About from '../../about/components/about';
import { Container, IconButton, Icon, ButtonGroup } from 'rsuite';

const MAINCONTAINER_STYLES = {
    main: {
        height: '100vh'
    },
    topBtn: {
        top: 10,
        left: 10,
    },
    homeBtn: {
        position: 'fixed',
        top: 5,
   },
   socialBtns: {
       position: 'fixed',
       left: 10,
       bottom: 10
   },
   btnContainer: {
       padding: 5,
   },
}

export default class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            sidenavActive: 'home',
            currentView: 'home'
        }
        this.changeView = this.changeView.bind(this);
        this.goHomeView = this.goHomeView.bind(this);
        this.sidenavRef = React.createRef();
        this.containerRef = React.createRef();
        this.wrapper = React.createRef();
    }

    changeView = (eventKey) => {
        console.log(eventKey);
        this.setState({
            sidenavActive: eventKey,
            currentView: eventKey
        });
    }

    goHomeView = () => {
        this.setState({
            sidenavActive: 'home',
            currentView: 'home'
        });
    }

    render = () => {
        return (
            <div ref={this.wrapper}>
                <Container ref={this.containerRef}>
                    <div>
                        <ButtonGroup
                            style={MAINCONTAINER_STYLES.topBtn} >
                            <IconButton
                                onClick={this.goHomeView}
                                appearance='ghost'
                                icon={<Icon icon='home' />} />
                        </ButtonGroup>
                    </div>
                    <SideNav
                        ref={this.sidenavRef}
                        activeKey={this.state.sidenavActive} 
                        changeView={this.changeView}/>
                        { this.state.currentView === 'home' ? 
                            <Home /> : null }
                        { this.state.currentView === 'about' ?
                            <About /> : null}
                    <div style={ MAINCONTAINER_STYLES.btnContainer }>
                        <ButtonGroup
                            vertical={true} 
                            style={ MAINCONTAINER_STYLES.socialBtns }>
                            <IconButton
                                appearance='ghost'
                                icon={<Icon icon='github' />} />
                            <IconButton
                                appearance='ghost'
                                icon={<Icon icon='linkedin' />} />
                        </ButtonGroup>
                    </div>
                </Container>
            </div>
        );
    }
}
