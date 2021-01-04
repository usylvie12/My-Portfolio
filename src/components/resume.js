import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
     <div  className="resume-details">
         <Grid>
            <Cell col={4}>
                 
            <h3 style={{color: '#606c88'}}>Sylvie UWAMARIYA</h3>
            <h4 style={{color: '#606c88'}}>Software Developer</h4>
            <hr style={{borderTop: '2px solid  #606c88', width: '50%'}}/>
            <p> I am a young lady 

            </p>
            <hr style={{borderTop: '2px solid  #606c88', width: '50%'}}/>

            <i class="fa fa-map-marker" aria-hidden="true">  Kigali Rwanda</i>
            <hr style={{borderTop: '2px solid  #606c882', width: '50%'}}/>

             <i class="fa fa-phone" aria-hidden="true"> +250722505084</i>  
            

            <hr style={{borderTop: '2px solid  #606c882', width: '50%'}}/>
            <i class="fa fa-envelope" aria-hidden="true">  uwasylvie12@outlook.com</i>
            
            
      

       
            </Cell>
     <Cell className="resume-right-col" col={8}>

     <h2>Education</h2>


<Education
  startYear={2010}
  endYear={2013}
  schoolName="University of Lay Adventists of Kigali (UNILAK)"
  schoolDescription="Bachelor’s degree of science in Information Systems and Management "
   />

   <Education
     startYear={2018}
     endYear={2018}
     schoolName=" Microsoft"
     schoolDescription="Microsoft certified Solutions Associate SQL 2016 Database Development "
      />
  <Education
  startYear={2020}
  endYear={2020}
  schoolName="freeCodeCamp"
  schoolDescription="Scientific Computing Using Python 3: python programming, PostgreSQL database design and web development"
   />
    <hr style={{borderTop: '3px solid #fff'}} />

  <h2>Experience</h2>

  <Experience
  startYear={2019}
  endYear={2021}
  jobName="Hiter at ISAHIT"
  jobDescription="working remotely on digital tasks, on a dataset for artificial intelligence (AI): categorization, content labeling, 
  image or video annotation "
  />

<Experience
  startYear={2020}
  endYear={2020}
  jobName="Full Stack Software developer  participant at BuildForSDG Challenge 2020"
  jobDescription="I have innovated Patient Data web application that aims 
  To store Patients Test and Results  
  Developed web application back 
  End components using Python Django and PostgreSQL for database design,
  Programmed, tested, and implemented a user login and registration,
 Patient’s data addition and manipulation system in 7 weeks
"
  />

<Experience
  startYear={2020}
  endYear={2021}
  jobName="Software Developer at SY Web Wise"
  jobDescription="Developed user interface by using the React JS, 
  Used React-Router to turn application into Single Page Application, Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application
  "
  />

  <Experience
    startYear={2020}
    endYear={2021}
    jobName="IT Data Manager at  Beza Consulting Engineers P.L.C (Ethiopia)"
    jobDescription="developed ODK data collection form using excel and XLS Form (survey questionnaire),clean Up Survey data and database creation for 
    Monitoring and Evaluation of Socioeconomic Impact of the Kagitumba – Kayonza – Rusumo road rehabilitation project"
    />


  <hr style={{borderTop: '3px solid #fff'}} />
  <h2>Skills</h2>
  <Skills
    skill="Python"
    progress={90}
    />
    <Skills
      skill="Django"
      progress={90}
      />
      <Skills
      skill="Flask"
      progress={70}
      />
    <Skills
      skill="HTML/CSS"
      progress={90}
      />
      <Skills
        skill="JavaScript"
        progress={70}
        />
        <Skills
          skill="React"
          progress={70}
          />

      </Cell> 
      </Grid>
      </div>
     )
 }

}
export default Resume;
