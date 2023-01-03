import React from 'react';
import Iframe from 'react-iframe';

const Resume = () => {
    return (
        <div className="Resume">
            <Iframe url="https://docs.google.com/document/d/e/2PACX-1vQYxFqv2Zvvcq8Dzpf568sFlubHyQ1bfHHTa8_F1-kYbTssI428Qb3dOA74Ird_MigXOdOgrthkHrtk/pub"
                    id="Resume"
                    className="Resume"
                    display="block"
                    position="relative"
                    width="100%"
                    height="1100px" />
        </div>
    )
};

export default Resume;
