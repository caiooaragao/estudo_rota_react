import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Organism/Navigation'

function RootLayout() {
  return (
    <>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default RootLayout