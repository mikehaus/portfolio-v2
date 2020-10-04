import React, { createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { Sidenav, Nav, Icon, IconButton, ButtonGroup } from 'rsuite';

const NAVSTYLES = {
    main: {
        width: 52,
        position: 'fixed',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        left: 0,
    },
};

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            activeKey: props.activeKey
        }
        this.wrapper = createRef();
        this.aboutRef = createRef();
        this.portfolioRef = createRef();
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (eventKey) => {
        //this.setState({
        //    activeKey: eventKey
        //});]
        this.props.changeView(eventKey);
        this.setState({ activeKey: eventKey })
    }

    render = () => {
        return(
            <div ref={this.wrapper}>
                <div style={ NAVSTYLES.main }>
                    <Sidenav
                        expanded={this.state.expanded}
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}
                        appearance='subtle'>
                        <div>
                            <Sidenav.Body>
                                <Nav>
                                    <Nav.Item 
                                        ref={this.aboutRef}
                                        eventKey='about'
                                        icon={<Icon icon='user-info' />}>
                                        About Mike
                                    </Nav.Item>
                                    <Nav.Item
                                        ref={this.portfolioRef}
                                        eventKey='portfolio'
                                        icon={<Icon icon='terminal-line' />}>
                                        Projects
                                    </Nav.Item>
                                </Nav>
                            </Sidenav.Body>
                        </div>
                    </Sidenav>
                </div>
            </div>         
        );
    }
}