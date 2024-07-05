import * as React from 'react';
import { Outlet } from 'react-router-dom';


import Header from '../header/Header';
import { Typography } from '@mui/material';


export default function Dashboard() {
  const [currentDate, setCurrentDate] = React.useState();

  React.useEffect(() => {
    const d = new Date();
    setCurrentDate(d.toLocaleString('default', { month: 'long', year: "numeric" }).toUpperCase())
  }, [])

  return (
    <div >
      <Header />
      <div>
        <div className='budget-view'>
          <Typography variant="h6" gutterBottom sx={{ padding: '10px', fontWeight: 700 }}>{currentDate}</Typography>
        </div>
        <Outlet />
      </div>
    </div >
  )
}