import React, { Component } from 'react';
import { Tabs, Tab ,Grid ,Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
      toggleCategories(){
          if(this.state.activeTab === 0){
              return(
                  <div className="projects-grid"> 
                      <Card shadow={0} style={{minwidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: '#D6A4A4'}}> Patient Data</CardTitle>
                <CardText>
                     BuildForSDG Challenge 2020 project (web application)
                    </CardText>  
                <CardActions border>
                <a href="https://github.com/usylvie12" rel="noopener noreferrer" target="_blank">GitHub</a>
                <a href="https://patient-medical-test.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                
                 
                </CardActions>
               
            </Card>
           
                  </div>
                
                
              )
          }else if(this.state.activeTab === 1){
            return(
                
                <Card shadow={0} style={{minwidth: '600px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: '#D6A4A4'}}>SY Web Wise</CardTitle>
                <CardText>
                SY Web Wise company website

                    </CardText>  
                <CardActions border>
                <a href="https://github.com/usylvie12/Sy-Web-Wise" rel="noopener noreferrer" target="_blank">GitHub</a>
                <a href="https://github.com/usylvie12" rel="noopener noreferrer" target="_blank">Live Demo</a>
                </CardActions>
                
            </Card> 

            
            )
        }else if(this.state.activeTab === 2){
            return(
                <Card shadow={0} style={{minwidth: '600px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: '#D6A4A4'}}>Budget App</CardTitle>
                <CardText>
                

                    </CardText>  
                <CardActions border>
                <a href="https://github.com/usylvie12/Budget-App" rel="noopener noreferrer" target="_blank">GitHub</a>
                <a href="https://github.com/usylvie12" rel="noopener noreferrer" target="_blank">Live Demo</a>
                </CardActions>
                
            </Card> 
            )
        }
      }
    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab> Django</Tab>
                <Tab>React</Tab>
                <Tab>freecodeCamp Python projects</Tab>
                
            </Tabs>
            <section className="projects-grid">
                {this.toggleCategories()}
                <Grid >
                    <Cell col={12}>
                        <div className="content">

                        </div>

                    </Cell>

                </Grid>

            </section>
            
        </div>
     )
 }

}
export default Projects;