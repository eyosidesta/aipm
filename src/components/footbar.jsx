import React, { Component } from 'react';
import '../App.less';
class AppFooter extends Component {
    
    render() { 
        return ( 
            <div className="app-footbar">
                <section className="footer-section-1">
                    <h2>Hours</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Sed nonne merninisti licere mihi ista</p>
                </section>
                <section className="footer-section-2">
                    <h2>Hours</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Sed nonne merninisti licere mihi ista</p>
                </section>
                <section className="footer-section-3">
                    <h2>Hours</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Sed nonne merninisti licere mihi ista</p>
                    
                </section>
                <div className="copyright">
                    <br/>
                    <hr/>
                    <p>&copy;Ambaricho International Prayer and Mission Movement {new Date().getFullYear()}. All rights reserved</p>
                </div>
            </div>
         );
    }
}
 
export default AppFooter;