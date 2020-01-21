import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';


const App = (props: any) => {
  return (
    <div className="ui container grid">
      <div className="ui">
        <div>
          <SongDetail />
        </div>
        <div >
          <SongList />
        </div>
      </div>
    </div>
  )
}

export default App;
