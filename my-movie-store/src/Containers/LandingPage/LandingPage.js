import React, { Component } from 'react';
import SearchMovie from '../../components/movies/SearchMovie'
import MoviesTrending from '../../components/movies/MoviesTrending'
import { Container } from '@material-ui/core'
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
