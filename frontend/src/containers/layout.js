import React from 'react'
import Main from '../components/Main/Main'
import Sidebar from '../components/Sidebar/Sidebar'

function Layout () {
    return (
        <div>
            <Sidebar/>
            <Main />
        </div>
    );
}

export default Layout;