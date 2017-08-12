import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';

// import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'; // The default
import $ from 'jquery';
import { fadeIn } from 'react-animations';
import { fadeInUp } from 'react-animations';
import { fadeInLeft } from 'react-animations';


import { fadeOut } from 'react-animations';
import { bounce } from 'react-animations';
import { flipInX } from 'react-animations';
import { flipInY } from 'react-animations';
import { zoomIn } from 'react-animations';





import { StyleSheet, css } from 'aphrodite/no-important';
import Radium from 'radium';



import GroupsBar from './GroupsBar';
import FilesBar from './FilesBar';
import DescBar from './DescBar';
import IconBar from './IconBar';
import CloseButton from './CloseButton';


import Profile from '../images/Profile.png';
import Experience from '../images/Experience.png';
import Projects from '../images/Projects.png';
import Network from '../images/Network.png';
import Languages from '../images/Languages.png';
import Education from '../images/Education.png';
import Other from '../images/Other.png';

import Document from '../images/Document.png';
import Coding from '../images/coding.png';
import ProjectsIcon from '../images/ProjectsIcon2.png';
import LinkedIn from '../images/Network/linkedin2.png';
import GitHub from '../images/Network/github2.png';
import Facebook from '../images/Network/facebook2.png';
import Email from '../images/Network/email2.png';
import HTMLCoding from '../images/html-coding.png';
import Chat from '../images/chat.png';
import College from '../images/college.png';
import School from '../images/open-book.png';

import ProfilePic from '../images/Edward_ProfilePic.png';

import myInfo from '../Info/PersonalInfo.js';

var infoIconImages = [
  [Document, Document], //Profile
  [Coding, Coding],  //Experience
  [ProjectsIcon, ProjectsIcon, ProjectsIcon],   //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  [HTMLCoding, Chat], //Languages
  [College, School], //Education
  [Document, Document, Document, Document, Document], //Other
]

var infoDescImages = [
  [ProfilePic, ""], //Profile
  ["", ""], //Experience
  ["", "", ""], //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  ["", ""], //Languages
  ["", ""], //Education
  ["", "", "", "", ""], //Other
]








class FinderDisplay extends Component {
  constructor() {
    super();
    this.state = {
      groupIndex: 0,
      fileIndex: 0,
      animate: 0,
      trash: 0,
      reload: 0,
      visible: 1,
    };
  }

  groupClick(i) {
    // document.getElementById("myGroupId0").children[0].className += " load";


    this.setState({
      groupIndex: i,
      fileIndex: 0,
      animate: this.state.animate+1,
    })
  }
  fileClick(i) {
    console.log("File clicked");
    this.setState({
      fileIndex: i,
      animate: this.state.animate+1,

    })
  }

  iconClick(i) {
    // console.log("File clicked");
    if (i == 1) {
      this.setState({
        reload: this.state.reload+1,
      })
    } else {

    }

  }

  closeWindow() {

  }

  render() {
    const styles = StyleSheet.create({

      fadeIn: {
        animationName: fadeIn,
        animationDuration: '0.4s'
      },

    })

    // try {
    //   console.log("Style textinput", this.myTextInput.style);
    //   // this.myTextInput.style.opacity = "0.5";
    // }
    // catch(err) {
    //   console.log( "style not working...", this.myTextInput);
    // }

    // console.log("filesImage", infoImages[0]);

    var opacityStyle;
    if (this.state.trash == 0) {
      opacityStyle = {
        opacity: "1.0",
      }
    } else {
      opacityStyle = {
        opacity: "0.0",
      }
    }


    return(
      <div>
      <Draggable key = {this.state.reload} style = {opacityStyle}>

        {/* <div id="containment-wrapper"> */}

        <div id="backShadow" className="draggable">
          <div className="bothWindows">
            <div className="shadowWindow"></div>
            <div className="finderTopBar">
              <div className="headerDisplay">
                <CloseButton
                  onClick={this.closeWindow()}
                />
                <div className="finderTopBarIcon"></div>
                <div className="finderTopBarText">
                  <p id="finderTopBarTextP">Edward Ren</p>
                </div>
              </div>

            </div>
            <div className="bottomElemeents">

              <div className="finderSideBar">


                <div id = "groupBar" className={css(styles.fadeIn)} >

                  <GroupsBar

                    groupIndex= {this.state.groupIndex}
                    fileIndex= {this.state.fileIndex}
                    groups ={[  "Profile", "Work", "Projects", "Network", "Languages", "Education", "Other"]}
                    groupsImage = {[Profile, Experience, Projects, Network, Languages, Education, Other]}
                    onClick={i => this.groupClick(i)}
                    animate = {this.state.animate}
                  />
                </div>

              </div>
              {/* <Fade> */}
              <div className="finderFilesBar" key = "1">


                  <FilesBar
                    fileIndex = {this.state.fileIndex}
                    filesText = {myInfo.data[this.state.groupIndex]}
                    filesImage = {infoIconImages[this.state.groupIndex]}
                    onClick = {i => this.fileClick(i)}
                    animate = {this.state.animate}
                  />
              </div>
              {/* </Fade> */}
              <div className="finderDescriptionBar">
                <div key = {this.state.animate} id = "groupBar" className={css(styles.fadeIn)} >
                  {//This fade in animation will only trigger if state within the enclosing div is changed, that is why we set the key to this.state.animate to trigger a re-render. Other functions ensure this.state.animate will always be unique and changed on click
                  }
                  <DescBar
                    groupIndex = {this.state.groupIndex}
                    fileIndex = {this.state.fileIndex}
                    content = {myInfo.data[this.state.groupIndex][this.state.fileIndex]}
                    contentImages = {infoDescImages[this.state.groupIndex][this.state.fileIndex]}
                    onClick = { i => this.descClick[i]}

                  />
                </div>
              </div>



            </div>
          </div>
        </div>
      </Draggable>
      <div className = "backIcons">
        <IconBar
          trash = {this.state.trash}
          onClick= {i => this.iconClick(i)}

        />

      </div>
    </div>
      //  {/* </div> */}

    )
  }

  componentDidUpdate() {
    $(function() {
      // $( ".finderSideBar" ).load(window.location.href + " .finderSideBar" );
    });
  }

}



window.onpopstate = function(event) {
  window.location.reload()
}


export default FinderDisplay;
