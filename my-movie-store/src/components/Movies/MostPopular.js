import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'

class MostPopular extends Component {
    render() {
        const {auth} = this.props;
        if (!auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <h1>Most Popular</h1>
                <Button color="primary">Hello World</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MostPopular);