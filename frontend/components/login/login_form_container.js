import { connect } from 'react-redux'
import { clearErrors, login } from '../../actions/session_actions'
import SessionForm from './session_form'

const mSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm)