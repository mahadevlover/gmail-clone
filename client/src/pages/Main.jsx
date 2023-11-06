import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Main() {

   const [openDrawer, setOpenDrawer] = useState(true);
    
   const toggleDrawer = () => {
    setOpenDrawer( prevState => !prevState);
   }
  return (
    <div>
      <Header  toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer}/>
      <div>
        Display Mails
      </div>
    </div>
  )
}

export default Main
