import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const SongDetail = () => {
  const selectedSong = useSelector(state => _.get(state, ['selectedSong'], null));

  if (!selectedSong) return (<React.Fragment>
    <div>Please select a song!</div>
  </React.Fragment>
  );

  const { title, duration } = selectedSong;

  return (<div>
    <h3>Details for:</h3>
    <p>
      Title: {title} <br />
      Duration: {duration}
    </p>
  </div>)
}

export default SongDetail;