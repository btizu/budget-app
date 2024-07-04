import * as React from 'react';
import { Tooltip, Typography, IconButton, AppBar, Box } from '@mui/material';

import CalculateIcon from '@mui/icons-material/Calculate';
import FunctionsIcon from '@mui/icons-material/Functions';
import EventNoteIcon from '@mui/icons-material/EventNote';

import './dashboard.css';

export default function Dashboard() {
  return (
    <AppBar position="static" color="primary">
      <div className='dashboard-container'>
        <Typography variant="h6" gutterBottom align='left' component="div">
          <Box fontWeight='fontWeightBold' display='inline'>
            BUDGET APP
          </Box>
        </Typography>
        <div className='dashboard-menu'>
          <Tooltip title="Budget view">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
            >
              <CalculateIcon sx={{ width: 32, height: 32, color: 'white' }}>B</CalculateIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Expenses">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
            >
              <FunctionsIcon sx={{ width: 32, height: 32, color: 'white' }}>M</FunctionsIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Plan budget">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
            >
              <EventNoteIcon sx={{ width: 32, height: 32, color: 'white' }}>M</EventNoteIcon>
            </IconButton>
          </Tooltip>
        </div>
      </div> </AppBar>
  )
}