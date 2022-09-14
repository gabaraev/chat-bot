import ChatWindow from './components/ChatWindow.jsx'
import AdList from './components/AdList.jsx';
import Socials from './components/Socials.jsx';

export default function App() {
  const messages = [
    {
      user: 'user',
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit,
       sed eiusmod tempor incidunt ut labore et dolore magna aliqua?`
    },
    {
      user: 'bot',
      content: `Ut enim ad minim veniam, quis nostrum exercitationem 
      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
      consequatur. Quis aute iure reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat 
      cupiditat non proident, sunt in culpa qui officia deserunt mollit 
      anim id est laborum.`
    }
  ]
  return (
    <div className='app'>
      <div class="left-column">
        <div className='left-column-buttons'>
          <div className='moon'>
            <img src='icons/Component_2luna.svg'></img>
          </div>
          <div className='glasses'>
            <img src='icons/Component_1ochki.svg'></img>
          </div>
          <img className='character' src='icons/Group_10pers.svg' alt="I'm supposed to be here :("></img>
        </div>
      </div>
      <ChatWindow  messages={messages}/>
      <div className='right-column'>
        <AdList />
        <Socials />
        <div className='logos'>
          <img className='yfu-logo' src='icons/logos/yfu-logo.png'></img>
          <img className='reflex-logo' src='icons/logos/reflex-logo.jpg'></img>
        </div>
      </div>
    </div>
  );
}

