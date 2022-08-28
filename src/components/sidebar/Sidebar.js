import React from 'react'
import {Helmet} from 'react-helmet'
import './_sidebar.scss'

import {  
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied, 
 } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebar,handleToggleSidebar}) => {

   const dispatch = useDispatch()
     const logOutHandler = ()=>{

        dispatch(log_out())

     }

  return (
    
    <nav className={sidebar?"sidebar open":"sidebar"}
     onClick={()=>handleToggleSidebar(false)}>
   <Link to="/">

        <li>
           <MdHome size={23}></MdHome> 
           <span>Home</span> 
           <Helmet>
          <title>Youtube-clone</title>
        </Helmet>
        </li>  
</Link>

   <Link to="/feed/subscriptions">
     
         <li>
           <MdSubscriptions size={23}></MdSubscriptions> 
           <span>Subscriptions</span> 
         </li>
   
   </Link>  
   <Link to="/likedVideo">

        <li>
           <MdThumbUp size={23}></MdThumbUp> 
           <span>Liked Video</span> 
        </li> 
</Link>
        <li>
           <MdHistory size={23}></MdHistory> 
           <span>History</span> 
        </li>  

        <li>
           <MdLibraryBooks size={23}></MdLibraryBooks> 
           <span>Library</span> 
        </li> 
        <Link to="/upload">

        <li>
           <MdSentimentDissatisfied size={23}></MdSentimentDissatisfied> 
           <span>Uploads</span> 
        </li> 
</Link>
        <hr></hr> 

        <li onClick={logOutHandler}>
           <MdExitToApp size={23}></MdExitToApp> 
           <span>Log Out</span> 
        </li> 

        <hr></hr> 
    </nav>
  )
  
}

export default Sidebar