import React, { Component } from 'react';

import './style.css';
import footerImage from '../../assets/imgs/footer.jpg';

export default class Footer extends Component {
    render() {
        console.log(footerImage);
        return (
            <footer id="footer">
                <img className="footer-background" src={footerImage} alt="Footer Image" />
            </footer>
        )
    }
}
