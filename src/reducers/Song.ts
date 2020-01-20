/**
 * Reducers are used to return data.
 */
export const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it That Way', duration: '5:10' }
  ];
};

export const selectedSongsReducer = (selectedSong = null, action: { type: string, payload: any }) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};