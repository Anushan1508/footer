import React, {Component} from 'react';
import Hero from "../../components/Hero/Hero";
import aboutImg from '../../asserts/about.jpg'
import AboutUsSection01 from "../../components/aboutusSection01/AboutUsSection01";
import AboutUsSection02 from "../../components/aboutusSection02/AboutUsSection02";

class AboutUs extends Component {
    render() {
        return (
            <div className="about">
                <Hero
                    heading="About Us"
                    background={aboutImg}
                />
                <AboutUsSection01/>
                <AboutUsSection02/>
            </div>

        );
    }
}

export default AboutUs;