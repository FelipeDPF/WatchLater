import React, { Component } from 'react';
import SearchMovie from '../../components/Movies/SearchMovie'
import MoviesTrending from '../../components/Movies/MoviesTrending'
import { Container } from '@material-ui/core'

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
        return (
            <Container style={{contentAlign:'center'}}>
                 <SearchMovie />
                 <MoviesTrending />
            </Container>
        );
    }
}

export default LandingPage;
