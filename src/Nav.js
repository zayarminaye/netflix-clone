import React, {useEffect, useState} from 'react';
import './Nav.css';
import { useHistory } from 'react-router-dom';

export default function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        // this means that only add nav__black appears when 
        <div className={`nav ${show && "nav__black"}`}> 
            <div className="nav__contents"> 
                <img onClick={() => history.push('/')} className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img onClick={() => history.push('/profile')} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}
