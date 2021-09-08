import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'login') {
        return (
            <div className="login-form">
              <div className="login-form2">
                <form onSubmit={this.handleSubmit}>
                    <label>EMAIL OR PHONE NUMBER 
                        <input 
                        type='text'
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    </label>
                    <label>PASSWORD
                        <input 
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    <button>Login</button>
                </form>
                <p>Need an account?</p>
                <Link to='/signup'>Register</Link>
              </div>
            </div>
        )
    } else {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>EMAIL
                        <input 
                        type='text'
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    </label>
                    <label>USERNAME
                        <input 
                        type='text'
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    </label>
                    <label>PASSWORD
                        <input 
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    {/* <label>DATE OF BIRTH
                        <input 
                        type='date'
                        value={this.state.dob}
                        />
                    </label> */}
                    <button>Continue</button>
                </form>

                <Link to='/login'>Already have an account?</Link>
            </div>
        )
    }
  }
}

export default SessionForm;
