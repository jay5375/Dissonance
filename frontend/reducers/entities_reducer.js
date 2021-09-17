import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer'
import usersServersReducer from './users_servers_reducer';
import directMessagesReducer from './direct_messages_reducer';
import messagesReducer from './messages_reducer';
import dmChannelsReducer from './dm_channels_reducer';

export default combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  unjoinedServers: usersServersReducer,
  messages: messagesReducer,
  directMessages: directMessagesReducer,
  dmChannels: dmChannelsReducer
});
