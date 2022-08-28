import React, { useEffect } from 'react'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from '../../video/Video'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideoByCategory } from '../../../redux/actions/videos.action'


import InfiniteScroll from 'react-infinite-scroll-component'

import SkeletonVideo from '../../skeletons/SkeletonVideo'

const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])


    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All')
            dispatch(getPopularVideos())
        else {
            dispatch(getVideoByCategory(activeCategory))
        }
    }

    return (
        <Container>

            <CategoriesBar></CategoriesBar>
            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
            {!loading
               ? videos.map(video => (
                    <Col lg={3} md={4}>
                       <Video video={video} key={video.id} />
                    </Col>
                 ))
               : [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                       <SkeletonVideo />
                    </Col>
                 ))}
         </InfiniteScroll>

            

        </Container>
    )
}

export default HomeScreen