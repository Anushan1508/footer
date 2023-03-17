import React from 'react';
import Hero from '../../components/Hero/Hero';
import serviceImg from "../../asserts/service.jpg"
function Service() {
    return (
        <div>
            <Hero
                heading="Service"
                background={serviceImg}
            />
            {/* Rest of the home page content */}
        </div>
    );
}

export default Service;
