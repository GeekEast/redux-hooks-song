import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App = (props: any) => {
  return (
    <div className="ui container grid">
      <div className="ui">
        <div className="column eight wide">
          <SongDetail />
        </div>
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  )
}

export default App;
