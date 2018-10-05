import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Rose from "components/Typography/Rose.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'

import Group from '@material-ui/icons/Group'
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import LocationCity from '@material-ui/icons/LocationCity'
import Home from '@material-ui/icons/Home'
import Hotel from '@material-ui/icons/Hotel'
import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";
import InfoArea from 'components/InfoArea/InfoArea.jsx'
class SectionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: ""
    };
  }
  componentDidMount() {
    const { classes } = this.props;
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards" >
        <div className={classes.sectionWhite}  >
          <div>
            {/* BLOG CARDS START */}
            <div >
              <div className={classes.container}>
                <div className={classes.title} >
                
     <b>   <h1  style={{textAlign: "center", color:'#336774 '}}>L' offre de soins francilienne</h1></b>
               
                </div>
               
              </div>
            </div>
            {/* BLOG CARDS END */}
            {/* PROFILE CARDS START */}
            
            <div>
              <div className={classes.container}  >
             
                
                
                <GridContainer justify="center" style={{border: '#336774', borderStyle: 'solid', borderWidth: 5, marginTop: 50}} >
                 
                  <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}} >
                    <Card profile>
                      <CardAvatar profile style={{backgroundColor: '#000000'}}>
                         <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <LocationCity style={{ padding: 0,  fontSize: 90, color: '#fff'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody>
                     	<b>	<h3 style={{ color: '#77be77' }}>25</h3></b>
                        <h4 className={classes.cardTitle}>Unités de soins palliatifs (USP)</h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                       
                      </CardBody>
                    </Card>
                  </GridItem>
                    <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}} >
                    <Card profile >
                      <CardAvatar profile style={{backgroundColor: '#000000'}}  >
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <Share style={{ padding: 0,  fontSize: 90, color: '#fff'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody>
                     	<b>	<h3 style={{ color: '#77be77' }}>23</h3></b>
                        <h4 className={classes.cardTitle}>Réseaux de soins palliatifs</h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      
                      </CardBody>
                    </Card>
                  </GridItem>
                  </GridContainer>
                  <GridContainer justify="center" style={{border: '#336774', borderStyle: 'solid', borderWidth: 5, marginTop: 50}}>
                    <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}}>
                    <Card profile>
                      <CardAvatar profile>
                         <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <Home style={{ padding: 0,  fontSize: 100, color: '#000000'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody>
                     	<b>	<h3 style={{ color: '#77be77' }}>15</h3></b>
                        <h4 className={classes.cardTitle}>Structures d'hospitalisation à domicile (HAD)</h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                 
                      </CardBody>
                    </Card>
                  </GridItem>
                    <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}}>
                    <Card profile>
                      <CardAvatar profile>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <Hotel style={{ padding: 0,  fontSize: 100, color: '#000000'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody>
                      	<b>	<h3 style={{ color: '#77be77' }}>747</h3></b>
                     
                        <h4 className={classes.cardTitle}>Lits identifiés soins palliatifs (USP)</h4>
                        <p className={classes.cardDescription} >
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                        
                      </CardBody>
                    </Card>
                  </GridItem>
                  </GridContainer>
                  <GridContainer justify="center" justify="center" style={{border: '#cc4949', borderStyle: 'solid', borderWidth: 5, marginTop: 50}} >
                    <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}}>
                    <Card profile>
                      <CardAvatar profile>
                       <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <Group style={{ padding: 0,  fontSize: 100, color: '#000000'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody >
                     	<b>	<h3 style={{ color: '#77be77' }}>72</h3></b>
                        <h4 className={classes.cardTitle}>Équipes mobiles de soins palliatifs</h4>
                        <p className={classes.cardDescription}  >
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                       
                      </CardBody>
                    </Card>
                  </GridItem>
                    <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}}>
                    <Card profile>
                      <CardAvatar profile>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <SupervisedUserCircle style={{ padding: 0,  fontSize: 100, color: '#000000'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody>
                     	<b>	<h3 style={{ color: '#77be77' }}>51
                         </h3></b>
                        <h4 className={classes.cardTitle}>Association de bénévoles d'accompagnement</h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                        
                      </CardBody>
                    </Card>
                  </GridItem>
                  </GridContainer>
                  <GridContainer justify="center" justify="center" style={{border: '#dadada', borderStyle: 'solid', borderWidth: 5, marginTop: 50}}>
                    <GridItem xs={12} sm={7} md={4} style={{marginTop: 100}}>
                    <Card profile>
                      <CardAvatar profile>
                         <a href="#pablo" onClick={e => e.preventDefault()}>
                        	
                          <LocationCity style={{ padding: 0,  fontSize: 100, color: '#000000'}}/>
                        </a>
                      </CardAvatar>
                      <CardBody>
                     	<b>	<h3 style={{ color: '#77be77' }}>32</h3></b>
                        <h4 className={classes.cardTitle}>Autres structures</h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>

              </div>
            </div>
          </div>
          {/* PROFILE PLAIN CARDS END */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionCards);
