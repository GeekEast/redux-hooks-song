import React from 'react';
import { selectSong } from '../actions'
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

const SongList = () => {
  const songs = useSelector(state => _.get(state, 'songs', []))
  const dispatch = useDispatch();
  const renderList = (songs: Array<{ title: string, duration: number }>) => songs.map(song => (
    <div className="item" key={song.title}>
      <div className="right floated content">
        <button className="ui button primary" onClick={() => dispatch(selectSong(song))}>Select</button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  ));

  return (
    <div className="ui divided list">{renderList(songs)}</div>
  )
}

export default SongList;