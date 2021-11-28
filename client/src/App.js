import React from "react";

import './App.css';
import Section from './components/Section.js';
import Trackify from './components/Trackify.js';
import InfoCard from './components/InfoCard.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.menuRef.current.className === 'dropdown_menu_shown')
        this.menuRef.current.className = 'dropdown_menu';
    else
        this.menuRef.current.className = 'dropdown_menu_shown';
  }

  render () {
    return <div className="app">
      <div className="header">
        <h2 className="highlighted">mahmood sheikh</h2>
        <div className="right_side">
          <a href="/fullresume">full resume</a>
          <a href="https://trackifyapp.net">trackify</a>
          <a href="https://github.com/mahmoodsheikh36">github</a>
          <a href="mailto:mahmod.m2015@gmail.com "className="special">mail me</a>
          <i className="fas fa-bars dropdown_btn" onClick={this.toggleMenu}></i>
        </div>
        <div ref={this.menuRef} className='dropdown_menu'>
          <a href="/fullresume">full resume</a>
          <a href="https://trackifyapp.net">trackify</a>
          <a href="https://github.com/mahmoodsheikh36">github</a>
          <a href="mailto:mahmod.m2015@gmail.com">mail me</a>
        </div>
      </div>

      <Section>
        <div className="left">
          <p className="title">Technology Enthusiast</p>
          <p>
            in summery, im a 19 year old who really enjoys studying/using computers/software or any type of technology
            <br/>
            <br/>
            im doing my bachelor's degree in computer science and maths and am looking to work in hitech as a student
            <br/>
            <br/>
            i already have 3 years of experience in working on games/webapps/unix systems/mobile apps, etc...
          </p>
        </div>
        <img src="/public/me.jpg" className="bordered right"/>
      </Section>

      <Section reverseOnWrap="true">
        <div className="left">
          <Trackify />
        </div>
        <div className="right">
          <p className="title">Trackify</p>
          <p>
            Trackify is my biggest project so far
          </p>
          <p>
            its a very sophisticated data collection service, it tracks your activity on spotify and displays it in beautiful charts for you to admire
          </p>
          <p>
            the following list is built using data fetched from Trackify's api which i wrote and it uses JWT, Trackify's database is pretty complex and it took me quite some time to figure out the best structure for it
          </p>
          <p>
            the data is mostly caused by me and my friends from highschool which signed up for the service
          </p>
          <p>
            as is the case with most of my projects, you can find Trackify's <a href="https://github.com/mahmoodsheikh36/trackify" class="highlighted">source code</a> on my github page
          </p>
        </div>
      </Section>
      <div style={{height: 100}}></div>

      <div className="cards">
        <InfoCard title="Academic Studies" img="/public/academic.webp">
          I am currently doing my Bachelors Degree in computer science & math
        </InfoCard>
        <InfoCard title="Experience" img="/public/programmer.webp">
          I have worked on multiple private/commercial projects (including full-stack projects), i worked as a developer for multiple Runescape clones and was paid pretty well
        </InfoCard>
        <InfoCard title="Determination & Passion" img="/public/determination.jpg">
          i am very passionate about computer science and i am always learning new stuff
        </InfoCard>
      </div>

      <div className="resume_btn_container">
        <a className="resume_btn" href="/resume">full résumé</a>
      </div>
    </div>
  }
}

export default App;
