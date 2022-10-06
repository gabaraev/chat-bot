import ChatWindow from './components/ChatWindow'
import AdList from './components/AdList';
import Socials from './components/Socials';


export default function App() {
  return (
    <div className='app'>
      <div className="left-column">
        <h1>Помошник абитуриента ЮФУ</h1>
        <div className='left-column-buttons'>
          <div className='moon'>
            <img src='icons/Component_2luna.svg' alt='темная тема'></img>
          </div>
          <div className='glasses'>
            <img src='icons/Component_1ochki.svg' alt='режим для слабовидящих'></img>
          </div>
          <img className='character' src='icons/Group_10pers.svg' alt="I'm supposed to be here :("></img>
        </div>
      </div>
      <ChatWindow/>
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

