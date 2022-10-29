import Cookies from 'js-cookie'
import { useEffect } from 'react'

interface LeftColumnProps {
	character: string,
	theme: string,
	setTheme: Function
}

export default function LeftColumn({ character, theme, setTheme }: LeftColumnProps) {
	const handleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	useEffect(() => {
		Cookies.set('theme', theme)
	}, [theme])

	return (
		<div className="left-column" data-theme={theme}>
			<h1 className='heading large' >Помощник абитуриента ЮФУ</h1>
			<div className='left-column-buttons large'>
				<div className='theme hover' onClick={handleTheme}>  
					<img src={`icons/${theme}-theme.svg`} alt='смена темы'></img>
				</div>
				<div className='glasses hover active'>
					<img src={`icons/vision-${theme}.svg`} alt='режим для слабовидящих'></img>
				</div>
			</div>
			<img className='character' src={`${character}-${theme}.svg`} alt="I'm supposed to be here :("></img>
		</div>
	)
}