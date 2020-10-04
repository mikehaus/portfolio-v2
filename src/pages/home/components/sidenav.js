import React from 'react';
import { Sidenav, Nav, Icon, IconButton, ButtonGroup } from 'rsuite';

const NAVSTYLES = {
    main: {
        width: 52,
        position: 'fixed',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        left: 0,
    },
    btnContainer: {
        padding: 10,
    },    
    homeBtn: {
        position: 'fixed',
        top: 10,
   },
   socialBtns: {
       position: 'fixed',
       bottom: 10
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
        //this.setState({
        //    activeKey: eventKey
        //});
        this.props.changeView(eventKey);
    }

    render = () => {
        return(
            <div>
                <div style={ NAVSTYLES.btnContainer }>
                    <IconButton 
                        appearance='ghost'
                        icon={<Icon icon='home' />} />
                </div>
                <div style={ NAVSTYLES.main }>
                    <Sidenav
                        expanded={this.state.expanded}
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}
                        appearance='subtle'>
                        <div>
                            <Sidenav.Body>
                                <div style={ NAVSTYLES.mid }>
                                <Nav>
                                    <Nav.Item eventKey='about' icon={<Icon icon='user-info' />}>
                                        About Mike
                                    </Nav.Item>
                                    <Nav.Item eventKey='portfolio' icon={<Icon icon='terminal-line' />}>
                                        Projects
                                    </Nav.Item>
                                </Nav>
                                </div>
                            </Sidenav.Body>
                        </div>
                    </Sidenav>
                </div>
                <div style={ NAVSTYLES.btnContainer }>
                    <ButtonGroup
                        vertical='true' 
                        style={ NAVSTYLES.socialBtns }>
                        <IconButton
                            appearance='ghost'
                            icon={<Icon icon='github' />} />
                        <IconButton
                            appearance='ghost'
                            icon={<Icon icon='linkedin' />} />
                    </ButtonGroup>
                </div>
            </div>         
        );
    }
}