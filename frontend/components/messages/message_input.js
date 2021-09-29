import React from 'react'
import consumer from "../../consumer"

class MessageInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.message = this.message.bind(this)
        this.subscription = null 
    }

    componentDidMount() {
        this.subscribe()
    }

    componentDidUpdate(prevProps){
        // if (prevProps.channelId !== this.props.channelId){
        //     this.subscription.unsubscribe()
        //     this.subscribe()
        // }
        if (prevProps.path !== this.props.path) {
            this.subscription.unsubscribe()
            this.subscribe()
            this.props.fetchChannelMessages(this.props.channelId)
        }
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    subscribe() {
        const channelId = this.props.channelId
        this.subscription = consumer.subscriptions.create(
            {channel: 'ChatChannel', id: channelId},
            { received: data => {
                this.props.createMessage(data.message)
            }}
        )
    }

    message(e) {
        e.preventDefault()
        this.setState({
            body: e.currentTarget.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.subscription.send({
            message: {
                server_id: this.props.serverId,
                body: this.state.body,
                channel_id: this.props.channelId
            }
        })
        this.setState({
            body: ""
        })
    }

    render() {
        return (
            <div className="input-bar">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.message}
                        className="bar"
                    />
                    <button className="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default MessageInput