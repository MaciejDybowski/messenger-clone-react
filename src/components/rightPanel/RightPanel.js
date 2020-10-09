import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import './RightPanel.css'
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { useDispatch } from 'react-redux';
import { addMsg } from '../../redux/actions/msgActions'
import { useFirestoreConnect } from 'react-redux-firebase'


import ScrollableFeed from 'react-scrollable-feed'

function RightPanel() {
    const dispatch = useDispatch();
    const myRef = useRef();

    // id zalogowanego
    const authUser = useSelector(state => state.firebase.auth.uid)
    // profil odbiorcy
    const uid = useSelector(state => state.person.uid);
    const persons = useSelector(state => state.firestore.ordered.users);
    const person = persons && persons.filter((person) => person.id === uid);

    // wiadomosc
    const [message, setMessage] = useState('');

    //pobranie wiadomosci
    useFirestoreConnect([{ collection: 'messages' }])
    const messages = useSelector(state => state.firestore.ordered.messages);
    const myMessages = messages && messages.filter((msg) => msg.from === authUser || msg.from === uid);
    const finsalMessages = myMessages && myMessages.filter((msg) => msg.to === uid || msg.to === authUser);
    const sortedMessages = finsalMessages && finsalMessages.slice().sort((a, b) => a.time - b.time);


    const enterSubmit = (e) => {
        if (e.keyCode === 13) {
            const obj = {
                to: uid,
                from: authUser,
                content: message,
            }
            dispatch(addMsg(obj));
            setMessage("");
        }
    }

    const likeSubmit = () => {
        console.log("dawaj okejke");
        const obj = {
            to: uid,
            from: authUser,
            content: '(y)',
        }
        dispatch(addMsg(obj));
    }

    let user = {}
    if (person !== undefined) {
        user = person[0];
        return (
            <div className='rightPanel'>
                {user ?
                    <>
                        <div className='person-auth'>
                            <Avatar>{user?.initials}</Avatar>
                            <div className='person-details'>
                                <p className='user'>{user?.firstName} {user?.lastName}</p>
                            </div>
                            <PhoneIcon className='phone-icon' />
                            <VideocamIcon className='video-icon' />
                            <SearchIcon className='search-icon' />
                            <MoreVertIcon className='dot-icon' />
                        </div>
                        <div className='msg' ref={myRef}>
                            <ScrollableFeed>
                                {sortedMessages?.map((msg) => {
                                    if (msg.from === authUser) {
                                        if (msg.content === '(y)') {
                                            return <p key={msg.id} className='myMsg likeIcon'><ThumbUpIcon /></p>
                                        } else {
                                            return <p key={msg.id} className='myMsg'>{msg.content}</p>
                                        }
                                    } else {
                                        if (msg.content === '(y)') {
                                            return <p key={msg.id} className='yourMsg likeIcon'><ThumbUpIcon /></p>
                                        } else {
                                            return <p key={msg.id} className='yourMsg'>{msg.content}</p>
                                        }
                                    }
                                })}
                            </ScrollableFeed>
                        </div>
                        <div className='msg-input'>
                            <AddCircleIcon className='add-icon' />
                            <input
                                type='text'
                                placeholder='Napisz wiadomość...'
                                onKeyDown={(e) => enterSubmit(e)}
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                            ></input>
                            <ThumbUpIcon className='like-icon' onClick = {() => likeSubmit()}/>
                        </div>
                    </>
                    : <></>}

            </div>
        )
    } else {
        return (
            <div className='rightPanel'>
                <p>Loadnig...</p>
            </div>
        )
    }

}

export default RightPanel
