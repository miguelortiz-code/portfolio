import Navbar from './navbar/Navbar';
import Themes from './themes/Themes';
import { Outlet } from 'react-router';



export default function AppLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Themes />
    </>
  )
}