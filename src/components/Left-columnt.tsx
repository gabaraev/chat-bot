interface LeftColumnProps {
	character: string
}

export default function LeftColumn({ character }: LeftColumnProps) {
	console.log(character);
	
	return (
	<div className="left-column">
        <h1>Помошник абитуриента ЮФУ</h1>
        <div className='left-column-buttons'>
          <div className='moon'>
            <img src='icons/Component_2luna.svg' alt='темная тема'></img>
          </div>
          <div className='glasses'>
            <img src='icons/Component_1ochki.svg' alt='режим для слабовидящих'></img>
          </div>
          <img className='character' src={character} alt="I'm supposed to be here :("></img>
        </div>
    </div>
	)
}