import React from 'react';
import {Link} from 'react-router-dom';

const PatternsLayout = ({children}) => (
    <section className="t-patterns container">
        <div className="t-patterns__navbar row">
            <nav className="">
                <ul>
                    <li><Link to="/patterns">Home</Link></li>
                    <li><Link to="/patterns/typography">Typography</Link></li>
                </ul>
            </nav>
            <div className="t-patterns__main">
                {children}
            </div>
        </div>
    </section>
);

export default PatternsLayout;
