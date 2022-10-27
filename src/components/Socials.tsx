interface SocialsProps {
    theme: string
}

export default function Socials({ theme }: SocialsProps) {


    return (
        <div className="social-wrapper">
            <a href='http://vk.com/sfedu_official' target="_blank"><img src={`icons/vk-${theme}.svg`} className='vk-logo' alt='вконтакте' /></a>
            <a href='https://www.youtube.com/c/sfeduTV?utm_source=EJGixIgBCJiu2KjB4oSJEQ' target="_blank"><img className='smol-youtube' src={`icons/yutub-${theme}.svg`} alt="ютуб" /></a>
            <a href='https://t.me/sfedu_study' target="_blank"><img src={`icons/telegram-${theme}.svg`} className='telegram-logo' alt="телеграмм" /></a>
            <a href='https://dzen.ru/sfedu' target="_blank"><img src={`icons/Zen-${theme}.svg`} className='zen-logo' alt="юфу" /></a>
        </div>
    )
}