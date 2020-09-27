import React from 'react';
import { Sidenav, Nav, Icon } from 'rsuite';

const NAVSTYLES = {
    main: {
        width: 52,
        position: 'fixed',
        height: '100vh',
        display: 'flex',
        left: 0
    }
};

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            activeKey: props.activeKey
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (eventKey) => {
        this.setState({
            activeKey: eventKey
        });
    }

    render = () => {
        return(
            <div style={NAVSTYLES.main}>
                <Sidenav 
                    expanded={this.state.expanded}
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                    appearance='subtle'
                >
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey='home' icon={<Icon icon='user-info' />}>
                                About Mike
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>            
        );
    }
}