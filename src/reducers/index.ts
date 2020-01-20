import { combineReducers } from 'redux';
import { selectedSongsReducer, songsReducer } from './Song'

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer
});