import AdList from './AdList';
import Socials from './Socials'


interface RightColumnProps {
	theme: string
}

export default function RightColumn({ theme }: RightColumnProps) {
	return (
		<div className='right-column' data-theme={theme} >
        <AdList />
        <Socials />
        <div className='logos'>
          <img className='yfu-logo' src='icons/logos/yfu-logo.png' alt='ЮФУ лого'></img>
          <img className='reflex-logo' src='icons/logos/reflex-logo.jpg' alt='командное лого'></img>
        </div>
      </div>
	)
}