import Banner from 'Components/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Pattern() {
  return (
    <main>
        <Banner/>
        <Outlet/>
    </main>
  )
}
