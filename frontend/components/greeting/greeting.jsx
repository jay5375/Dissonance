import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render(){
      if (this.props.currentUser) {
        return (
            <div>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        )
      } else {
        return (
            <div>
                <nav>
                  <div className="nav-wrapper">
                    <Link to=''>
                      <img src={window.logo} alt='Dissonance'></img>
                    </Link>
                      <div className="links">
                        <Link to='' className="link">Download</Link>
                        <Link to='' className="link">Nitro</Link>
                        <Link to='' className="link">Safety</Link>
                        <Link to='' className="link">Support</Link>
                      </div>
                      <button className="login-button"><Link to="/login" className="login">Login</Link></button>
                    </div>
                </nav>
                <div className="body-section-one">
                  <div className="background"><img src={window.clouds}></img></div> 
                  <div className="image-one"><img src={window.image_one}></img></div>
                  <div className="image-two"><img src={window.image_two}></img></div>
                  <div className="text">
                    <h1>Imagine a place...</h1>
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                    <div className="bs1b">
                        <button className="b1">Download for Windows</button>
                        <button className="b2">Open Discord in your browser</button>
                    </div>
                  </div>
                </div>
                <div className="body-section-two">
                  <div className="image-container">
                    <img src={window.image_three}></img>
                  </div>
                  <div className="bs2_text">
                    <h2>Create an invite-only place where you belong</h2>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                  </div>
                </div>
                <div className="color">
                  <div className="body-section-three">
                    <div className="bs3_text">
                      <h2>Where hanging out is easy</h2>
                      <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                    </div>
                    <div className="image-container3">
                      <img src={window.image_four}></img>
                    </div>
                  </div>
                </div>
                <div className="body-section-two">
                  <div className="image-container">
                    <img src={window.image_five}></img>
                  </div>
                  <div className="bs2_text">
                    <h2>From few to a fandom</h2>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                  </div>
                </div>
                <div className="body-section-four color">
                  <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
                  <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br/> games, or gather up and have a drawing session with screen share.</p>
                  <img src={window.image_six}></img>
                  <div className="body-section-five">
                    <div className="container">
                      <div className="image-container4">
                        <img src={window.sparkles}></img>
                        <h2>Ready to start your journey?</h2>
                      </div>
                    </div>
                      <button>Download for Mac</button>
                  </div>
                </div>
                <div className="color2">
                  <div className="footer">
                      <div className="footer1">
                        <h2>IMAGINE A PLACE</h2>
                      </div>
                      <div className="footer2">
                        <p className="color3">Product</p>
                        <p>Download</p>
                        <p>Nitro</p>
                        <p>Status</p>
                      </div>
                      <div className="footer3">
                        <p className="color3">Company</p>
                        <p>About</p>
                        <p>Jobs</p>
                        <p>Branding</p>
                        <p>Newsroom</p>
                      </div>
                      <div className="footer4">
                        <p className="color3">Resources</p>
                        <p>College</p>
                        <p>Support</p>
                        <p>Safety</p>
                        <p>Blog</p>
                        <p>Feedback</p>
                        <p>Developers</p>
                        <p>StreamKit</p>
                      </div>
                      <div className="footer5">
                        <p className="color3">Policies</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Guidelines</p>
                        <p>Acknowledgements</p>
                        <p>Licenses</p>
                        <p>Moderation</p>
                      </div>
                    </div>
                  </div>
            </div>
        )
      }
    }
};


export default Greeting;
