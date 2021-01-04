import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Profile from "./profile.jpg";

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                <Cell col={12}>
                  <img src={ Profile } alt="" />
                  <div className="banner-text">
                     <h1>Sylvie UWAMARIYA</h1> 
                     <h2>Full Stack Software Developer</h2>
                     <p><i class="fa fa-envelope" aria-hidden="true"></i>  uwasylvie12@outlook.com </p>
                     <p><i class="fa fa-map-marker" aria-hidden="true">  Kigali Rwanda</i></p>

                     <hr/>

                     

<p> Python | Django | Flask | JavaScript | NodeJS | React | PostgreSQL </p>

<div className="social-links">

{/* LinkedIn */}
<a href="https://www.linkedin.com/in/sylvie-uwamariya/" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-linkedin-square" aria-hidden="true" />
</a>

{/* Github */}
<a href="https://github.com/usylvie12" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-github-square" aria-hidden="true" />
</a>

{/* Freecodecamp */}
<a href="https://www.freecodecamp.org/uwamariyasylvie" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-free-code-camp" aria-hidden="true" />
</a>



</div>
                   </div>
              
                </Cell>
              </Grid>
              
            </div>
        )
    }

}

export default Landing;