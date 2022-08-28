import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideoByCategory } from '../../redux/actions/videos.action'
import './_categoriesBar.scss'



const Keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of Api",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Tamil Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",

]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState("All")



  const dispatch =useDispatch()
  const handleClick = value => {
    setActiveElement(value)
    if(value==='All'){
      dispatch(getPopularVideos())
    }
    else{

      dispatch(getVideoByCategory(value))
    }
  }

  return (
    <div className='categoriesBar'>
      {
        Keywords.map((value, i) => (
          <span
           onClick={() => handleClick(value)}
           key={i}
           className={activeElement === value ? 'active':''}>
            {value}
          </span>
          ))}
    </div>

            

  )
}

export default CategoriesBar