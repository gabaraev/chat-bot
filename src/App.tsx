import ChatWindow from './components/ChatWindow'
import { useState } from 'react';
import LeftColumn from './components/Left-columnt';
import RightColumn from './components/Right-column';
import Cookies from 'js-cookie';


export default function App() {
  // setting Cookies of theme and id for db
  if (Cookies.get('theme') === undefined)
    Cookies.set('theme', 'light')

  const [theme, setTheme] = useState(Cookies.get('theme'))
  const [character, setCharacter] = useState('icons/characters/general')
  return (
    <div className='app' data-theme={theme} >
      <LeftColumn character={character} theme={theme} setTheme={setTheme} />
      <ChatWindow setCharacter={setCharacter} theme={theme} />
      <RightColumn theme={theme}/>
    </div>
  );
}

