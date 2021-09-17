import * as DmUtils from "../util//direct_message_util"
import { REMOVE_MESSAGE } from "./message_actions"

export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE'
export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES'
export const REMOVE_DIRECT_MESSAGE = 'REMOVE_DIRECT_MESSAGE'

const receiveDm = message => {
    return {
        type: RECEIVE_DIRECT_MESSAGE,
        message
    }
}

const receiveDms = messages => {
    return {
        type: RECEIVE_DIRECT_MESSAGES,
        messages
    }
}

const removeDm = messageId => {
    return {
        type: REMOVE_DIRECT_MESSAGE,
        messageId 
    }
}

export const fetchChannelDms = dmChannelId => dispatch => {
    return DmUtils.fetchChannelDms(dmChannelId)
        .then(messages => dispatch(receiveDms(messages)))
}

export const createDm = message => dispatch => {
    return DmUtils.createDm(message)
        .then(message => dispatch(receiveDm(message)))
}

export const deleteDm = message => dispatch => {
    return DmUtils.deleteDm(message)
        .then(() => dispatch(removeDm(message.id)))
}

