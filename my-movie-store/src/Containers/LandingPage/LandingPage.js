import React, { Component } from 'react';
import SearchMovie from '../../components/Movies/SearchMovie'
import MoviesTrending from '../../components/Movies/MoviesTrending'
import { Container } from '@material-ui/core'
import Login from '../../components/Auth/Login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true }
       console.log(' Props here:', this.props);
    }
    
    triggerAddLogin = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isAddLoginState: true
        })

    }
    render() {
        const {auth} = this.props;
        if (!auth.uid) {
            return <Redirect to='/' />
        }
        return (
           
             <Container style={{contentAlign:'center'}}>
                <SearchMovie />
                {/* <Login /> */}
                <MoviesTrending />
             </Container>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(LandingPage);
