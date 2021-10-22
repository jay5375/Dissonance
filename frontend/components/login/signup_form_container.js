import { connect } from 'react-redux'
import { signup, clearErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const mSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
}) 

export default connect(mSTP, mDTP)(SessionForm)