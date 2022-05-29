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
      <div className='main'>
          <div class="left-column">
            <h1>Помошник абитуриента ЮФУ</h1>
            <div className='left-column-buttons'>
              <button>ночная тема</button>
              <button>режим для слабовидящих</button>
            </div>
          </div>
          <div class="ellipse"></div>
      </div>
      <ChatWindow  messages={messages}/>
      <div className='right-column'>
        <AdList />
        <Socials />
        <div className='logos'>
          <img className='yfu-logo' src='/yfu-logo.png'></img>
          <img className='reflex-logo' src='/reflex-logo.jpg'></img>
        </div>
      </div>
    </div>
  );
}

