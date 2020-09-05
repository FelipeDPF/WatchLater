import React, { Component } from 'react';
import SearchMovie from '../../components/Movies/SearchMovie'


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
            <div>
                 <SearchMovie/>
            </div>
        );
    }
}

export default LandingPage;
