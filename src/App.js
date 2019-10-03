
import React, { Component } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GiHemp } from "react-icons/gi";
import './App.css';

export default class App extends Component {
  
  state = {
      toggle: false
  }

  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }

  render() {

    const li = [    {
                      link: "/",
                      text: <GiHemp/>
                    }, 
                    {
                      link: "/",
                      text:"HOME"
                    },
                    {
                      link: "/about/",
                      text:"ABOUT"
                    },
                    {
                      link: "/flower/",
                      text: "OUR FLOWER"
                    },
                    {
                      link: "/contact/",
                      text: "CONTACT"
                    },
                    {
                      link: "/test/",
                      text: "test, test, test"
                    }
    ];

      return (
        <>
            <div className="navBar">
                  <button onClick = {this.Toggle}>
                      <FiMenu/>
                  </button>
                  <ul className = {this.state.toggle ? "links show-nav" : "links"}>
                      {
                        li.map((objLink, i) => {
                        return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
                        })
                      }
                  </ul>
            </div>
        </>
      );
  }
}

