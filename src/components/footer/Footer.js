import React from "react";
import "./styles.css";
import myImage from '../../asserts/photosgrid/img.jpg';
import myImage2 from '../../asserts/photosgrid/img2.jpg';

function Footer() {
    return (
        <footer className="">
            <section className="footer-row">
                <div className="footer-col-1">
                    <img src={myImage2} alt="Title 1"/>
                    <p>So seed seed green that winged cattle in Gahesd thing made fly you're no divided deep move lan
                        Gathering thing us land years living on floor me the cavaty do buty fresh

                    </p>
                </div>
                <div className="footer-col-2">
                    <h2>Best Services</h2>
                    <ul>
                        <li>General Contracting</li>
                        <li>Mechanical Engineering</li>
                        <li>Civil Engineering</li>
                        <li>Bridge Construction</li>
                        <li>Electrical Engineering</li>
                    </ul>
                </div>
                <div className="footer-col-3">
                    <h2>Our Gallery</h2>
                    <div className="photo-gallery">
                        <img src={myImage} alt="Image 1"/>
                        <img src={myImage} alt="Image 2"/>
                        <img src={myImage} alt="Image 3"/>
                        <img src={myImage} alt="Image 4"/>
                        <img src={myImage} alt="Image 5"/>
                        <img src={myImage} alt="Image 6"/>
                    </div>
                </div>
                <div className="footer-col-4">
                    <h2>Contact Info</h2>
                    <p>4361 Morningview Lane Artland , Street Latimer, IA 50452 / 23654</p>
                    <p>Address : Hath of it fly signs bear be one blessed after</p>
                    <p>Phone : +2 36 265 (8060)</p>
                    <p>Email : info@colorlib.com</p>
                </div>
            </section>
            <div className="footer-row footer-row-copyright">
                <p>Copyright &copy; 2023 All rights reserved | This template is made with by Colorlib</p>
            </div>
        </footer>
    );
}

export default Footer;
