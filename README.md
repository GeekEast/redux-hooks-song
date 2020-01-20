## Define Redux
###  Define Actions
- 用描述性的方式告诉store应该如何处理数据;
- Action Creator用来创造Actions(code reuse);
```javascript
export const selectSong = (song: any) => { return { type: 'SONG_SELECTED', payload: song } }; 
```

### Define Reducers
- 定义reducers: 定义数据的`初始状态`和`处理方法`
```javascript
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
```

- 整合reducers
```javascript
// components/reducers/index
import { combineReducers } from 'redux';
import { selectedSongsReducer, songsReducer } from './Song'
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer
});
```

### Define Store
- 在全局载入store
```javascript
import { createStore } from "redux";
import reducer from './reducers';
const store = createStore(reducer);
export default store;
```

## Use Redux
### Read data
```javascript
import { useSelector } from 'react-redux';
const selectedSong = useSelector(state => _.get(state, ['selectedSong'], null));
```

### Send data
```javascript
const dispatch = useDispatch();
  <button className="ui button primary" 
      onClick={() => dispatch(selectSong(song))}> Select </button>
```


