import ChatWindow from './components/ChatWindow'
import { useState } from 'react';
import LeftColumn from './components/Left-columnt';
import RightColumn from './components/Right-column';


export default function App() {
  const [theme, setTheme] = useState('light')
  const [character, setCharacter] = useState('icons/characters/general.svg')
  return (
    <div className='app' data-theme={theme} >
      <LeftColumn character={character} theme={theme} setTheme={setTheme} />
      <ChatWindow setCharacter={setCharacter} theme={theme} />
      <RightColumn theme={theme}/>
    </div>
  );
}

