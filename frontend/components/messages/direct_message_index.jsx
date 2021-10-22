import React from "react";
import consumer from "../../consumer";
import DmItem from "./direct_message_item";


class DirectMessageIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            display: false,
            dm: false,
            value: ""
        }
        this.displayModal = this.displayModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.subscription = null 
    }

    componentDidMount() {
        this.props.fetchDmChannels(this.props.currentUser.id)
        this.subscribe()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dmChannels.length != this.props.dmChannels.length) {
            this.props.fetchDmChannels(this.props.currentUser.id);
        }
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    subscribe() {
        this.subscription = consumer.subscriptions.create(
            {channel: "UserChannel", id: this.state.value},
            {
                received: data => {
                    this.props.fetchDmChannels()
                    this.setState({
                        display: false, 
                        dm: false,
                        value: ""
                    })
                }
            }
        )
    }

    displayModal() {
        let next = !this.state.display
        this.setState({
            display: next,
            dm: false,
            value: ""
        })
    }

    handleChange(e) {
        this.setState({value: e.currentTarget.value})
    }

    handleSubmit(e) {
        let dmChannel = {
            user1_id: this.props.currentUser.id,
            user2_id: this.state.value 
        }
        this.props.createDmChannel(dmChannel)
        this.subscription.send({
            message: {
                user1_id: this.props.currentUser.id,
                user2_id: this.state.value 
            }
        })
    }

    render() {
        if (!this.props.path.includes("@")) return null 
        if (!this.props.users) return null 
        return (
            <div className="channel_container">
                <div className="server_menu">
                    <p>{this.props.currentUser.username}</p>
                </div>
                <div className="channel_banner" id="dms">
                    <p>Direct Messages</p><p className="add" onClick={this.displayModal}>+</p>
                </div>
                <div className="channels">
                <ul>
                    {this.props.dmChannels.map(dmChannel => {
                        if (dmChannel.user1.id === this.props.currentUser.id || dmChannel.user2.id === this.props.currentUser.id){
                            return <li key={dmChannel.id} id="indent">
                                    <img src={window.user_logo} className="user-logo"/>
                                    <DmItem 
                                        dmChannel={dmChannel}
                                        messages={dmChannel.messages}
                                        currentUser={this.props.currentUser}
                                    />
                                    </li>
                        }
                    })}
                </ul>
                </div>
                <div className={`modal-container ${this.state.display ? 'display_modal' : 'hide_modal'}`}>
                    <div className={'createChannel'}>
                        <form onSubmit={this.handleSubmit}>
                            <p onClick={this.displayModal}>&times;</p>
                            <h1>Chat with a Friend</h1>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="">Choose a User</option>
                                {this.props.users.map(user => {
                                    if (user.username != this.props.currentUser.username) {
                                        return <option key={user.id} value={user.id}>{user.username}</option>
                                    }
                                })}
                            </select>
                            <button>Chat</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DirectMessageIndex