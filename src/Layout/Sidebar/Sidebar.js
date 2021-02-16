import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Store, Storefront, VideoLibrary } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <SidebarRow 
            src='/images/vesikalık.png'
            title='Kubilay Albayrak'
            />
            <SidebarRow 
            Icon={LocalHospital}
            title='Covid-19 Information Center'
            />
            <SidebarRow 
            Icon={EmojiFlags}
            title='Pages'
            />
            <SidebarRow 
            Icon={People}
            title='Friends'
            />
            <SidebarRow 
            Icon={Chat}
            title='Messenger'
            />
            <SidebarRow 
            Icon={Storefront}
            title='MarketPlace'
            />
            <SidebarRow 
            Icon={VideoLibrary}
            title='Videos'
            />
            <SidebarRow 
            Icon={ExpandMoreOutlined}
            title='MarketPlace'
            />
        </div>
    )
}

export default Sidebar
