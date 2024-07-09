import * as React from 'react';
import { Outlet } from 'react-router-dom';


import Header from '../header/Header';
import Transactions from './transactions/Transactions';
import { Card, CardContent, Typography } from '@mui/material';

import './dashboard.css';

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
        <div className='budget-info'>
          <Typography variant="h6" gutterBottom sx={{ padding: '10px', fontWeight: 700 }}>{currentDate}</Typography>
          <div className='budget-info'>
            <Card sx={{ margin: 5 }}>
              <CardContent>
                <Typography >Budget </Typography>
                <Typography >{0} RON</Typography>
              </CardContent>
            </Card>
            <Card sx={{ margin: 5 }}>
              <CardContent>
                <Typography >Expenses </Typography>
                <Typography >{0} RON</Typography>
              </CardContent>
            </Card>
            <Card sx={{ margin: 5 }}>
              <CardContent>
                <Typography >Balance </Typography>
                <Typography >{0} RON</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Transactions />
        </div>
        <Outlet />
      </div>
    </div >
  )
}