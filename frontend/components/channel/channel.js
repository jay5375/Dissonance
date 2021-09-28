import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faHashtag, faCog, faTimesCircle } from  '@fortawesome/free-solid-svg-icons'

class Channel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            modal: false, 
            edit: false,
            modalValue: {}
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.channels.length !== this.props.channels.length && this.props.path !== "/channels/@me") {
            if (this.props.server){
                this.props.updateServer(this.props.server)
            }
        }
    }

    handleEdit(bool, channel){
        return e => {
            e.preventDefault()
            this.setState({ edit: bool, modalValue: channel })
        }
    }

    handleUpdate(e){
        e.preventDefault()
        this.props.updateChannel({ name: this.state.name, id: this.state.modalValue.id })
        this.props.updateServer(this.props.server)
        this.setState({ edit: false, name: "", modalValue: {} })
    }

    handleDelete(e){
        e.preventDefault()
        this.props.deleteChannel({ id: this.state.modalValue.id })
        this.props.updateServer(this.props.server)
        this.setState({ edit: false, name: "", modalValue: {} })
    }

    render() {
        if (!this.props.server) return null 
        return (
            <div className="channels">
                <ul>
                    {this.props.server.channels.map(channel => {
                        return (<li key={channel.id} className="single-channel">
                                    <i><FontAwesomeIcon icon={faHashtag} className="hash" /></i>
                                    <Link to={`/servers/${this.props.server.id}/${channel.id}`}>
                                        <p>{channel.name}</p>
                                    </Link>
                                    <i className="cog" onClick={ this.handleEdit(true, channel) }><FontAwesomeIcon icon={faCog}/></i>
                                </li>)
                    })}
                </ul>
                <div className={`modal-container ${ this.state.edit ? 'display_modal' : 'hide_modal'}`}>
                    <div className={`createChannel`}>
                        <form>
                            <div className="circle-x">
                                <FontAwesomeIcon icon={faTimesCircle} onClick={this.handleEdit(false, {})} />
                            </div>
                            <h1>Edit Text Channel</h1>
                            <p>Channel Name</p>
                            <input 
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange("name")}
                                placeholder={this.state.modalValue.name}
                            />
                            <div className="createChannelButtons">
                                <button onClick={this.handleDelete} className="red">Delete Channel</button>
                                <button onClick={this.handleUpdate} className="purple">Edit Channel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Channel