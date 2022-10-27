import Ad from './Ad'
import VKMain from './ads/VkMainPost'
import VKSic from './ads/VkSicPost'


export default function AdList() {
    return (
        <div className="ad-list-wrapper">
            <div className="ad-list-header" >
                <span>Доска объявлений</span>
            </div>
            <VKMain />
            <VKSic />
            <Ad />
            <Ad />
        </div>
    )
}