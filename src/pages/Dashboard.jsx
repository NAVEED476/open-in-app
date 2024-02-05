import React from 'react'
import "./dashboard.css"
import SideBar from '../Components/SideBar'

const Dashboard = () => {
  return (
    <div className='db-cont'>
        <div className='sideBar'>
            <SideBar/>
        </div>
        <div className='db-right'></div>
    </div>
  )
}

export default Dashboard