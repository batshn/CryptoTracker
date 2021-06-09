import React from 'react'
import Main from '../components/Main/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import Tracker from '../components/LiveTracker/Tracker'

function Layout () {
    return (
        <div>
            <Sidebar/>
            <Main />
            <Tracker/>

        </div>
    );
}

export default Layout;