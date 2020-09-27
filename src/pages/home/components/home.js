import React from 'react';
import SideNav from './sidenav';
import { Container } from 'rsuite';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            sidenavActive: 'home',
            currentView: 'home'
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView = (eventKey) => {
        this.setState({
            sidenavActive: eventKey,
            currentView: eventKey
        });
    }

    render = () => {
        return (
            <div>
                <Container>
                    <SideNav 
                        activeKey={this.state.sidenavActive} 
                        changeView={this.changeView}/>
                </Container>
            </div>
        );
    }
}
