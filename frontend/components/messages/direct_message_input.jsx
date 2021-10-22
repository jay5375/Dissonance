import React from "react";
import consumer from "../../consumer";

class DirectMessageInput extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            body: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.subscription = null 
    }

    componentDidMount() {
        this.subscribe()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dmChannel.id !== this.props.dmChannel.id) {
            this.subscription.unsubscribe()
            this.subscribe();
            this.props.fetchChannelDms(this.props.dmChannel.id)
        }
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    subscribe() {
        let dmChannelId = this.props.dmChannel.id
        this.subscription = consumer.subscriptions.create(
            {channel: "DirectMessageChannel", id: dmChannelId},
            {
                received: data => {
                    this.props.fetchChannelDms(this.props.dmChannel.id)
                }
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let message = {
            sender_id: this.props.currentUser.id,
            body: this.state.body,
            dm_channel_id: this.props.dmChannel.id 
        }
        this.props.createDm(message)
        this.subscription.send({
            message: {
                sender_id: this.props.currentUser.id,
                body: this.state.body,
                dm_channel_id: this.props.dmChannel.id 
            }
        })

        this.setState({ body: "" })
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({ body: e.currentTarget.value })
    }

    render() {
        return (
            <div className="input-bar">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.handleInput}
                        className="bar"
                        placeholder={`Message @${this.props.user}`}
                        required
                    />
                    {/* <button className="submit">Submit</button> */}
                </form>
            </div>
        )
    }
}

export default DirectMessageInput