import ChatWindow from './components/ChatWindow'
import AdList from './components/AdList';
import Socials from './components/Socials';
import { useState } from 'react';
import LeftColumn from './components/Left-columnt';


export default function App() {
  const [character, setCharacter] = useState('icons/characters/general.svg')
  return (
    <div className='app'>
      <LeftColumn character={character} />
      <ChatWindow setCharacter={setCharacter}/>
      <div className='right-column'>
        <AdList />
        <Socials />
        <div className='logos'>
          <img className='yfu-logo' src='icons/logos/yfu-logo.png' alt='ЮФУ лого'></img>
          <img className='reflex-logo' src='icons/logos/reflex-logo.jpg' alt='командное лого'></img>
        </div>
      </div>
    </div>
  );
}

