import React, {Component} from 'react';
import aboutUsSec01 from "../../asserts/aboutus-sec1.jpg";
import './AboutUsSection02.css'

class AboutUsSection02 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="left-column">
                        <div className="main-content">
                            <h2>We Are Experience in Construction</h2>
                            <p>Their whose made waters there our, air above first give dry fruit that second whose herb
                                creeping it us light spirit appear mans. So green abundantly She'd. Greater divide dry
                                bearing years ourends herb upon which open lights had blessed replenish Cattle give his.
                                Abundantly over saying which beast dominion multiply behold to wateo.</p>
                        </div>
                        <div className="sub-section">
                            <div className="number">20</div>
                            <p>Year
                                Of Experience</p>
                        </div>
                    </div>
                    <div className="right-column">
                        <img src={aboutUsSec01} alt="Placeholder image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsSection02;