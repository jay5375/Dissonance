import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render(){
      if (this.props.currentUser) {
        return (
            <div>
                <nav>
                  <div className="nav-wrapper">
                    <Link to=''>
                      <img src={window.logo} alt='Dissonance'></img>
                    </Link>
                      <div className="links">
                        <a href="https://github.com/jay5375">GitHub</a>
                        <a href="https://www.linkedin.com/in/jonathan-wong-435a8b146/">LinkedIn</a>
                        {/* <a href="">Portfolio</a> */}
                        <a href="https://docs.google.com/document/d/1V0Y0HZvcfPiW93J_Y_bRNS07jfRTXbe7Sa-uQSB1l8Q/edit?usp=sharing">Resume</a>
                      </div>
                      <button className="login-button"><Link to="/channels/@me" className="login">Open Discord</Link></button>
                    </div>
                </nav>
                <div className="body-section-one">
                  <div className="background"><img src={window.clouds}></img></div> 
                  <div className="image-one"><img src={window.image_one}></img></div>
                  <div className="image-two"><img src={window.image_two}></img></div>
                  <div className="text">
                    <h1>IMAGINE A PLACE...</h1>
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                  </div>
                </div>
                <div className="body-section-two">
                  <div className="image-container">
                    <img src={window.image_three}></img>
                  </div>
                  <div className="bs2_text">
                    <h1>Create an <br/> invite-only <br/> place where you <br/> belong</h1>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                  </div>
                </div>
                <div className="color">
                  <div className="body-section-three">
                    <div className="bs3_text">
                      <h1>Where hanging <br/> out is easy</h1>
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
                    <h1>From few to a fandom</h1>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                  </div>
                </div>
                <div className="body-section-four color">
                  <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                  <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br/> games, or gather up and have a drawing session with screen share.</p>
                  <img src={window.image_six}></img>
                  <div className="body-section-five">
                    <div className="container">
                      <div className="image-container4">
                        <img src={window.sparkles}></img>
                        <h2>Ready to start your journey?</h2>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <a href="https://github.com/jay5375" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/jonathan-wong-435a8b146/" target="_blank">LinkedIn</a>
                        {/* <a href="">Portfolio</a> */}
                        <a href="https://docs.google.com/document/d/1V0Y0HZvcfPiW93J_Y_bRNS07jfRTXbe7Sa-uQSB1l8Q/edit?usp=sharing" target="_blank">Resume</a>
                      </div>
                      <button className="login-button"><Link to="/login" className="login">Login</Link></button>
                    </div>
                </nav>
                <div className="body-section-one">
                  <div className="background"><img src={window.clouds}></img></div> 
                  <div className="image-one"><img src={window.image_one}></img></div>
                  <div className="image-two"><img src={window.image_two}></img></div>
                  <div className="text">
                    <h1>IMAGINE A PLACE...</h1>
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                  </div>
                </div>
                <div className="body-section-two">
                  <div className="image-container">
                    <img src={window.image_three}></img>
                  </div>
                  <div className="bs2_text">
                    <h1>Create an <br/> invite-only <br/> place where you <br/> belong</h1>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                  </div>
                </div>
                <div className="color">
                  <div className="body-section-three">
                    <div className="bs3_text">
                      <h1>Where hanging <br/> out is easy</h1>
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
                    <h1>From few to a fandom</h1>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                  </div>
                </div>
                <div className="body-section-four color">
                  <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                  <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br/> games, or gather up and have a drawing session with screen share.</p>
                  <img src={window.image_six}></img>
                  <div className="body-section-five">
                    <div className="container">
                      <div className="image-container4">
                        <img src={window.sparkles}></img>
                        <h2>Ready to start your journey?</h2>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
      }
    }
};


export default Greeting;
