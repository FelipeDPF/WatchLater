import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { firestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class WatchList extends Component {
    render() {
        const {auth} = this.props;

        if (!auth.uid) {
            return <Redirect to='/Login' />
        }

        return (
            <div>
                <h1>Watch List</h1>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(WatchList);