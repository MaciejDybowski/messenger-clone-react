import React from 'react'
import './LeftPanel.css'
import Avatar from '@material-ui/core/Avatar';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import LaunchIcon from '@material-ui/icons/Launch';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import {setUserAction } from '../../redux/actions/personAction'
import {useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {logout} from '../../redux/actions/authActions';

function LeftPanel() {
    const profile = useSelector(state => state.firebase.profile)
    const profileUid = useSelector(state => state.firebase.auth)
    useFirestoreConnect([{ collection: 'users' }])
    const users = useSelector(state => state.firestore.ordered.users);
    const newUsers = users?.filter((item) => item.id !== profileUid.uid);

    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout())
    }

    const isAuth = useSelector(state => state.firebase.auth)
    if(!isAuth.uid) return <Redirect to='/'></Redirect>
    return (
        <div className='leftPanel'>
            <div className='myProfile'>
                <Avatar>{profile.initials}</Avatar>
                <p className='app-text'>Messenger</p>
                <Avatar className='icon'>
                    <VideoCallIcon />
                </Avatar>
                <Avatar className='icon'>
                    <ExitToAppIcon onClick = {() => handleLogout()} />
                </Avatar>
            </div>
            <div className='input-search'>
                <SearchIcon />
                <input type='text' placeholder='Szukaj'></input>
            </div>
            {newUsers?.map((user,i) => <Person  key={i} user={user} />)}
        </div>
    )
}


const Person = ({user}) => {
    const dispatch = useDispatch();

    const setUser = () =>{
        dispatch(setUserAction(user.id))
    }

    return (
        <div className='person' onClick={() => setUser()}>
            <Avatar>{user.initials}</Avatar>
            <div className='person-details'>
                <p className='user'>{user.firstName} {user.lastName}</p>
                <p className='dateOfActivity'>Aktywna ostatnio 20:20</p>
            </div>
        </div>
    )
}

export default LeftPanel
