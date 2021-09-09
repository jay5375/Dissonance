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
            <div className="auth_background">
              <div className="login-form2">
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome back!</h1>
                    <p>We're so excited to see you again!</p>
                    <p>EMAIL OR PHONE NUMBER</p>
                    <input 
                    type='text'
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                    <p>PASSWORD</p>
                    <input 
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                    <button>Login</button>
                    <button onClick={() => this.props.processForm({email: 'testing', password: 'password'})}>Demo User</button>
                </form>
                  <p>Need an account? <Link to='/signup'>Register</Link></p>
              </div>
            </div>
        )
    } else {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                    <div className="auth_background">
                      <div className="signup-form">
                        <h1>Create an account</h1>
                        <p>EMAIL</p>
                        <input 
                        type='text'
                        value={this.state.email}
                        onChange={this.update('email')}/>
                        <p>USERNAME</p>
                        <input 
                        type='text'
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                        <p>PASSWORD</p>
                        <input 
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                        <button>Continue</button>
                        <Link to="/login" className="link">Already have an account?</Link>
                      </div>
                    </div>
              </form>
            </div>
        )
    }
  }
}

export default SessionForm;
