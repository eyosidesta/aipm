import React, { Component } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import Avatar from 'antd/lib/avatar/avatar';
import SubMenu from 'antd/lib/menu/SubMenu';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import '../App.less';

class Navbar extends Component {
    state = {
        current: 'mail'
    }
    handleClick = e => {
        this.setState({current: e.key});
    };
    render() {
        
        const current = this.state;
        const { Header, Sider, Content, Footer } = Layout;
        return(
            <Router>
                <div className="navbar">
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="logoImg" src="./images/logo512.png"><Link to="/">{<Avatar size={100} src="./images/logo512.png"/>}</Link></Menu.Item>
                        
                        <Menu.Item key="aipm-title">
                            <Link to="/">
                            <span className="aipm-title">AIPM</span> <br/><div className="aipm-desc">
                            Ambaricho International Prayer and Mission Movement</div></Link></Menu.Item>
                        
                        <SubMenu key="about_us_menu" icon={<SettingOutlined />} title="About Us">
                        <Menu.Item key="who_we_are"><Link to="/who-we-are">Who We Are</Link></Menu.Item>
                        <Menu.Item key="missionaries"><Link to="/missionaries">Missionaries</Link></Menu.Item>
                        <Menu.Item key="our_goal"><Link to="/our-goal">Our Goal</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="Support"><Link to="/support-us">Support us</Link></Menu.Item>
                        <Menu.Item key="updates"><Link to="/updates">Updates</Link></Menu.Item>
                        <Menu.Item key="Testimony"><Link to="/testimony">Testimony</Link></Menu.Item>
                        <Menu.Item key="projects"><Link to="/projects">Projects</Link></Menu.Item>
                        <SubMenu key="contact_us_menu" icon={<SettingOutlined />} title="Contact Us">
                            <Menu.Item key="/be_aipm_member"><Link to="be-aipm-member">Be Aipm Member</Link></Menu.Item>
                            <Menu.Item key="/contact_us"><Link to="contact-us">Contact us</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                        
                </div>
            </Router>
        );
    }
}

export default Navbar;
