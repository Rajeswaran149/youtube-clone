import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Header from "./components/header/Header.js";
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './components/screens/homeScreen/HomeScreen.js';
import { useState } from 'react';



import LoginScreen from './components/screens/homeScreen/loginScreen/LoginScreen.js';


import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

import "./_app.scss"
import WatchScreen from './components/screens/watchScreen/WatchScreen.js';
import SearchScreen from './components/screens/SearchScreen.js';
import SubscriptionsScreen from './components/screens/subscriptionsScreen/SubscriptionsScreen.js';
import ChannelScreen from './components/screens/channelScreen/ChannelScreen.js';
import UploadScreen from './components/screens/uploadScreen/UploadScreen.js';
import LikedVideosScreen from './components/screens/liked videos screen/LikedVideosScreen.js';

const Layout = ({ children }) => {

    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}></Header>
            <div className='app__container '>
                <Sidebar
                    sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}
                ></Sidebar>

                <Container fluid className='app__main '>
                    {children}
                </Container>

            </div>
        </>
    )
}

const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth)

    const history = useHistory()

    useEffect(() => {

        if (!loading && !accessToken) {
            history.push('/auth')
        }

    }, [accessToken, loading, history])

    return (


        // <Router>



        <Switch>
            <Route path='/' exact>
                <Layout>
                    <HomeScreen></HomeScreen>
                </Layout>
            </Route>

            <Route path='/auth' >
                <LoginScreen></LoginScreen>
            </Route>

            <Route path='/search/:query' >
                <Layout>
                    <SearchScreen></SearchScreen>
                </Layout>
            </Route>
            <Route path='/watch/:id' >
                <Layout>
                    <WatchScreen></WatchScreen>
                </Layout>
            </Route>

            <Route path='/feed/subscriptions' >
                <Layout>
                    <SubscriptionsScreen></SubscriptionsScreen>
                </Layout>
            </Route>

            <Route path='/channel/:channelId' >
                <Layout>
                    <ChannelScreen></ChannelScreen>
                </Layout>
            </Route>
            <Route path='/likedVideo' >
                <Layout>
                    <LikedVideosScreen></LikedVideosScreen>
                </Layout>
            </Route>

            <Route path='/upload'>
                <Layout>
                    <UploadScreen />
                </Layout>
            </Route>

            <Route>
                <Redirect to='/'></Redirect>
            </Route>

        </Switch>

        // </Router>


    )
}

export default App