interface LeftColumnProps {
	character: string,
	theme: string,
	setTheme: Function
}

export default function LeftColumn({ character, theme, setTheme }: LeftColumnProps) {
	console.log(character);
	
	const handleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
	<div className="left-column" data-theme={theme}>
        <h1 className='heading' >Помошник абитуриента ЮФУ</h1>
        <div className='left-column-buttons'>
          <div className='theme hover active' onClick={handleTheme}>
            <img src='icons/Component_2luna.svg' alt='темная тема'></img>
          </div>
          <div className='glasses hover active'>
            <img src='icons/Component_1ochki.svg' alt='режим для слабовидящих'></img>
          </div>
		<img className='character' src={character} alt="I'm supposed to be here :("></img>
        </div>
    </div>
	)
}