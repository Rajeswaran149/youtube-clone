import './likedVideosScreen.scss'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLikedVideos } from '../../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Col, Container } from 'react-bootstrap'
import Video from '../../video/Video'
import SkeletonVideo from '../../skeletons/SkeletonVideo'


const LikedVideosScreen = () => {

  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLikedVideos())
    },[dispatch])
    const {videos,loading} = useSelector(state => state.likedVideos)

  return (
    <Container>
    <InfiniteScroll
      dataLength={videos.length}
      hasMore={true}
      loader={
        <div className='spinner-border text-danger d-block d-block mx-auto'></div>
      }
      className='row'>
      {!loading ? (videos.map((video) => (
        <Col lg={3} md={4}>
          <Video video={video} key={video.id} ></Video>
        </Col>
      ))
      ) : (
        [...Array(20)].map(() => (
          <Col lg={3} md={4}>
            <SkeletonVideo></SkeletonVideo>
          </Col>
        )

        )
      )
      }

    </InfiniteScroll>
  </Container>
  )
}

export default LikedVideosScreen