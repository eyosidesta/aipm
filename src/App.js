import { Button, Layout } from 'antd';
import './App.less';
import Navbar from './components/navbar';
import Home from './components/home';
import React, {Component} from 'react';
import AppFooter from './components/footbar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import WhoWeAre from './components/About/whoWeAre';
import Testimony from './components/testimony';
import Missionary from './components/About/missionaries';
import OurGoal from './components/About/ourGoal';
import SupportUs from './components/supportUs';
import Updates from './components/updates';
import Porjects from './components/projects';
import BeAipmMember from './components/contact/beAipmMember';
import ContactUs from './components/contact/contactUs';
  
class App extends Component {
  render() {
    const { Header, Content, Sider, Footer } = Layout;

    return (
      <Router>
        <div className='App.js'>
            <Layout>
              <Navbar />
              <Content>
                  <Route path="/" exact component={Home}/>

                  <Route path="/who-we-are" exact component={WhoWeAre}/>
                  <Router path="/missionaries" exact component ={Missionary} />
                  {/* <Router path="/our-goal" exact component = {OurGoal} />

                  <Router path="/testimony" exact component={Testimony} />
                  <Router path="/support-us" exact component = {SupportUs} />
                  <Router path="/updates" exact component = {Updates} />
                  <Router path="/projects" exact component = {Porjects} />

                  <Router path="/be-aipm-member" exact component = {BeAipmMember} />
                  <Router path="/contact-us" exact component = {ContactUs} /> */}
              </Content>
              <Footer className="footer">
                <AppFooter />
              </Footer>
            </Layout>
        </div>
      </Router>
    );
  };
}

export default App;
