
import React, { Component } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './App.css';

export default class App extends Component {
  
  state = {
      toggle: false
  }

  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }

  render() {

    const li = [
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
                      text: "test"
                    }
    ];

      return (
        <>
            <div className="navBar">
                  <button onClick = {this.Toggle}>
                      <IoIosMenu/>
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

