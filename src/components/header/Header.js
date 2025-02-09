import * as React from 'react';
import { Tooltip, Typography, IconButton, AppBar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'

import CalculateIcon from '@mui/icons-material/Calculate';
import FunctionsIcon from '@mui/icons-material/Functions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';

import './header.css';

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" color="primary">

                <div className='header-container'>
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
                                onClick={() => navigate("/")}
                            >
                                <CalculateIcon sx={{ width: 32, height: 32, color: 'white' }}>B</CalculateIcon>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Expenses">
                            <IconButton
                                size="small"
                                sx={{ ml: 2 }}
                                onClick={() => navigate("/expenses")}
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

                        <Tooltip title="Settings">
                            <IconButton
                                size="small"
                                sx={{ ml: 2 }}
                            >
                                <SettingsIcon sx={{ width: 32, height: 32, color: 'white' }}>M</SettingsIcon>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </AppBar >
        </>
    )
}