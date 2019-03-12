import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { $ } from 'jquery';
import './Home.scss';
import Parallax from 'parallax-js';
export default class Home extends Component {
    
    componentDidMount(){
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);    
    }
    render() {
    
        return (
            <div id="scene" data-relative-input="true" className="parallax">
        <div data-depth="0.4" className="text-center">
          <img id="mountain" src="http://www.design-fenix.com.ar/parallax/mountain.png" alt />
        </div>
        <h1 data-depth="0.2" className="text-center">GRC</h1>
        <div data-depth="0.3" className="text-center">
          <img id="island" src="http://www.design-fenix.com.ar/parallax/island.png" alt />
        </div>
        <div data-depth="0.3" className="text-center">
          <img id="birds" src="http://www.design-fenix.com.ar/parallax/bird.png" alt />
        </div>
        <div data-depth="0.1" className="text-center">
          <img id="boat" src="http://www.design-fenix.com.ar/parallax/boat.png" alt />
        </div>
        <h2 data-depth="0.1" className="text-center">Saving Lives</h2>
      </div>
        )
    }
}