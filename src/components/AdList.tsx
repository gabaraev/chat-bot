import Ad from './Ad'


export default function AdList() {
    return (
        <div className="ad-list-wrapper">
            <div className="ad-list-header" >
                <span>Доска объявлений</span>
            </div>
            <Ad />
            <Ad />
            <Ad />
            <Ad />
        </div>
    )
}