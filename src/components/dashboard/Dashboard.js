import React from 'react'
import './Dashboard.css'
import LeftPanel from '../leftPanel'
import RightPanel from '../rightPanel'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Dashboard() {
    const isAuth = useSelector(state => state.firebase.auth)
    if (!isAuth.uid) return <Redirect to='/'></Redirect>
    return (
        <div className='dashboard'>
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default Dashboard
