import AdList from './AdList';
import Socials from './Socials'


interface RightColumnProps {
	theme: string
}

export default function RightColumn({ theme }: RightColumnProps) {
	return (
		<div className='right-column large' data-theme={theme} >
        <AdList />
        <Socials theme={theme}/>
        <div className='logos'>
          <img className='yfu-logo' src={`icons/logos/yfu-${theme}.svg`} alt='ЮФУ лого'></img>
          <img className='reflex-logo' src={`icons/logos/reflex-${theme}.svg`} alt='командное лого'></img>
        </div>
    </div>
	)
}