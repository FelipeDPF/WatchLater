import React, { Component } from 'react';
import classes from '../LandingPage/LandingPage.module.css';
import Typical from 'react-typical'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true }
      }
    
      triggerAddLogin = () => {
        this.setState({
          ...this.state,
          isEmptyState: false,
          isAddLoginState: true
        })
  
      }
    render() {
        return (
            <div className={classes.LandingPage}>
                <header className="App-header">
                    <Typical
                        steps={[
                            '', 2000,
                            'Welcome to MovieOfTheWeek', 500,
                            'Vote on your favourite movie and see the bests of the week', 500,
                            'Ready to join the group?', 1000,
                            'TURN OFF YOUR CELLPHONES AND ENJOY THE MOVIE!😎', 1000,
                            ''
                        ]}
                        loop={1}
                        wrapper="h1"
                    />
                  
                </header>
            </div>
        );
    }
}

export default LandingPage;
