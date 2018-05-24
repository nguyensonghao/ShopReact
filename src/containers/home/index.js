import React, { Component } from 'react';

import './style.css';
import TopHeader from '../../components/topHeader';
import Footer from '../../components/footer';

export default class Home extends Component {
    render() {
        return (
            <div id="home-page">
                <TopHeader/>
                <Footer/>
            </div>
        )
    }
}
