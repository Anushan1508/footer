import React, {Component} from 'react';
import aboutUsSec01 from "../../asserts/aboutus-sec1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faHome} from "@fortawesome/free-solid-svg-icons";
import './AboutUsSection01.css'
class AboutUsSection01 extends Component {
    render() {
        return (
            <div>
                <div className="two-column-section">
                    <div className="image-column">
                        <img src={aboutUsSec01} alt="Example Image"/>
                    </div>
                    <div className="content-column">
                        <h2>Engineering Your Dreams With Us</h2>
                        <p className="main-paragraph">
                            Which cattle fruitful he fly visi won't let above lesser stars. Fly form wonder every let
                            third form two air seas after us said day won light also together midst two female she great
                            to open.
                        </p>
                        <div className="sub-section">
                            <FontAwesomeIcon icon={faHome} className="icon-large"/>
                            <h3>Certified Company</h3>
                            <p>Be man air male shall under create light together grass fly dat also also his brought
                                itself air abundantly</p>
                        </div>
                        <div className="sub-section">
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="icon-large"/>
                            <h3>Experience Employee</h3>
                            <p>Be man air male shall under create light together grass fly do also also his brought
                                itself air abundantly</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsSection01;