import React, { useState } from 'react'
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


function RightPanel() {
    const dispatch = useDispatch();

    // id zalogowanego
    const authUser = useSelector(state => state.firebase.auth.uid)
    // profil odbiorcy
    const uid = useSelector(state => state.person.uid);
    const persons = useSelector(state => state.firestore.ordered.users);
    const person = persons?.filter((person) => person.id === uid);

    // wiadomosc
    const [message, setMessage] = useState('');

    //pobranie wiadomosci
    useFirestoreConnect([{ collection: 'messages' }])
    const messages = useSelector(state => state.firestore.ordered.messages);
    console.log(authUser); // zalogowany
    console.log(uid); // odbiorca
    console.log(messages); 

    const myMessages = messages?.filter((msg) => msg.from === authUser || msg.from === uid );
    console.log(myMessages);

    const finsalMessages = myMessages?.filter((msg) => msg.to === uid || msg.to === authUser);
    const sortedMessages = finsalMessages?.slice().sort((a,b) => a.time - b.time);
    console.log(finsalMessages);

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
                        <div className='msg'>
                            {sortedMessages?.map((msg) => {
                                if(msg.from === authUser){
                                    return <p className='myMsg'>{msg.content}</p>
                                }else{
                                    return <p className='yourMsg'>{msg.content}</p>
                                }
                            })}
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
                            <ThumbUpIcon className='like-icon' />
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
