interface LeftColumnProps {
	character: string,
	theme: string,
	setTheme: Function
}

export default function LeftColumn({ character, theme, setTheme }: LeftColumnProps) {
	console.log(character);
	
	const handleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		// change characters to dark themed

	}

	return (
	<div className="left-column" data-theme={theme}>
        <h1 className='heading' >Помошник абитуриента ЮФУ</h1>
        <div className='left-column-buttons'>
          <div className='theme hover' onClick={handleTheme}>
            <img src={`icons/${theme}-theme.svg`} alt='смена темы'></img>
          </div>
          <div className='glasses hover active'>
            <img src={`icons/vision-${theme}.svg`} alt='режим для слабовидящих'></img>
          </div>
		<img className='character' src={character} alt="I'm supposed to be here :("></img>
        </div>
    </div>
	)
}