import React from 'react';
import styled from 'styled-components'
import Profiles from '../Profiles'
import CounterHook from '../CounterHook'
import {CounterMemo} from '../CounterMemo'
import InputFocus from '../InputFocus';
import UserProfile from '../UserProfile'
import { Card } from './Card';

const Dashboard = ({ handleLogout }) => {
    return (
        <div className="container">
            <section className="dashboard">
            <nav>
                <h2>Welcome!</h2>
                <button onClick={ handleLogout}>Logout</button>
            </nav>
            </section>                    
            
            <div>
                <Profiles />
                {/* <CounterHook />
                <CounterMemo /> */}
                {/* <InputFocus /> */}
                <UserProfile />
            </div>
                
            <div className="cardContainer">
                <div className="flex">
                    <Card idImage={237} timeAgo={"Just Now"}/>
                    <Card idImage={238} timeAgo={"Few Seconds"}/>
                    <Card idImage={239} timeAgo={"A minute"}/>
                    <Card idImage={240} timeAgo={"7 Hours"}/>
                    <Card idImage={240} timeAgo={"7 Hours"}/>
                </div>
            </div>
        </div>        
    )
}

export default Dashboard;