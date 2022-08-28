import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getVideoBySearch } from '../../redux/actions/videos.action';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'


const SearchScreen = () => {

  
  const {query}= useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getVideoBySearch(query))
  },[query,dispatch])




  const {videos,loading} = useSelector(state=>state.searchedVideos)

  return (
      <Container>

{!loading ? (
        videos?.map(video=>(
        <VideoHorizontal video={video} key={video.id.videoId}></VideoHorizontal>
        ))
        ):(
          <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton width="100%" height="160px" count={20}></Skeleton>
          </SkeletonTheme>
        )
      }

      </Container>
  )
}

export default SearchScreen