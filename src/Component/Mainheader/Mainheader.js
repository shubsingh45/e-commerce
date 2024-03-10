import React from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
  const Mainheader = () => {
  return (
    <div>
        <Header/>
        <section></section>
        <Outlet/>

    </div>
  )
}
export default Mainheader;
