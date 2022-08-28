import { Col, Container, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './channelScreen.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getVideosByChannel } from '../../../redux/actions/videos.action'
import { getChannelDetails } from '../../../redux/actions/channel.action'
import Video from '../../video/Video'


import numeral from 'numeral'

const ChannelScreen = () => {

    const dispatch = useDispatch()

    const {channelId} = useParams()

    useEffect(()=>{
      dispatch(getVideosByChannel(channelId))
      dispatch(getChannelDetails(channelId))
    },[dispatch,channelId])

    const {videos,loading} = useSelector(state=>state.channelVideos)
    const {snippet,statistics} = useSelector(state=>state.channelDetails.channel)

  return (
    <>
    
    <div className="px-5 py-2 my-2 d-flex  justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
           <img src={snippet?.thumbnails?.default?.url} alt=''></img>

           <div className='ml-3 channelHeader__details'>

           <h3>{snippet?.title}</h3>
              <span>
                {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                subscribers
              </span>
           </div>
        </div>
              
         <button>Subscribe</button>

    </div>



    
   <Container>
    <Row className="mt-2">

    {
      !loading ? videos?.map(video=>(
        <Col md={3} lg={3}>
        <Video video={video} channelScreen></Video>
      </Col>)):

        [...Array(15)].map(()=>
        <Col md={3} lg={3}>
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton width="100%" height="140px" ></Skeleton>
          </SkeletonTheme>
        </Col>
        )
    }
   </Row>
   </Container>

    </>
  )
}

export default ChannelScreen