import React, { useEffect } from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import axios from 'axios';

class HeroSection extends React.Component {
  state = {
    contacts: []
};

componentDidMount() {
    fetch('https://node-red-nxdup.mybluemix.net/visitor')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
        })
        .catch(console.log)
}
  render() {
    return(
      <div>
        {this.state.contacts.map(contact => (
          <div>
            <div>{contact.welcome}</div>
            <div>{contact.version}</div>
            <img src="/" />
          </div>
        ))}
      </div>
    )
  };
}

export default HeroSection;
