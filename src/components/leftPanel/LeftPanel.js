import React from 'react'
import './LeftPanel.css'
import Avatar from '@material-ui/core/Avatar';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import LaunchIcon from '@material-ui/icons/Launch';
import SearchIcon from '@material-ui/icons/Search';

import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

function LeftPanel() {
    const profile = useSelector(state => state.firebase.profile)
    const profileUid = useSelector(state => state.firebase.auth)
    useFirestoreConnect([{ collection: 'users' }])
    const users = useSelector(state => state.firestore.ordered.users);
    const newUsers = users?.filter((item) => item.id != profileUid.uid);
    return (
        <div className='leftPanel'>
            <div className='myProfile'>
                <Avatar>{profile.initials}</Avatar>
                <p className='app-text'>Messenger</p>
                <Avatar className='icon'>
                    <VideoCallIcon />
                </Avatar>
                <Avatar className='icon'>
                    <LaunchIcon />
                </Avatar>
            </div>
            <div className='input-search'>
                <SearchIcon />
                <input type='text' placeholder='Szukaj'></input>
            </div>
            {newUsers?.map((user) => <Person user={user} />)}
        </div>
    )
}


const Person = ({user}) => {
    return (
        <div className='person'>
            <Avatar>{user.initials}</Avatar>
            <div className='person-details'>
                <p className='user'>{user.firstName} {user.lastName}</p>
                <p className='dateOfActivity'>Aktywna ostatnio 20:20</p>
            </div>
        </div>
    )
}

export default LeftPanel
