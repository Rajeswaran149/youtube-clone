import React, { useEffect, useState } from 'react'
import './_header.scss'



// import { IconName } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
   const { photoURL } = useSelector(state => state.auth?.user)
   return (
      <img
         src={photoURL}
         alt={require('../../image/avatar.png')}
      ></img>
   )
}

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')


   const history = useHistory()

   const handleSubmit = (e) => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }
   // const {photoURL} = useSelector(state=> state.auth?.user)
   // const photo = sessionStorage.getItem('photo')
   const { login } = useSelector(state => state.auth)


   return (
      <div className='header'>

         <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
         ></FaBars>

         <img
            src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
            className='header__logo'></img>

         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}>
            </input>
            <button type='submit'>
               <AiOutlineSearch size={22}></AiOutlineSearch>
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28}></MdNotifications>
            <MdApps size={28}></MdApps>
            {
               login ?
                  <Photo />
                  :
                  <img
                     src={require('../../image/avatar.png')}
                     alt='avatar'
                  ></img>
            }
         </div>

      </div>
   )
}

export default Header