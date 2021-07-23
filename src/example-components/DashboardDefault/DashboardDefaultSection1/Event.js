import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent } from '@material-ui/core';
import { IconButton, Menu, MenuItem, Box, Popover } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
const ITEM_HEIGHT = 20;


export default function Event(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl3, setAnchorEl3] = React.useState(null);

    const handleClickPopover3 = event => {
        setAnchorEl3(event.currentTarget);
    };
    const handleClosePopover3 = () => {
        setAnchorEl3(null);
    };

    const open3 = Boolean(anchorEl3);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="card-box bg-light-gray border-0 text-light mb-4">
                <CardContent className="p-3">
                    <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                            <small className="text-black-80 font-size-sm d-block mb-1 text-uppercase">
                                {props.club}
                            </small>
                            <span className="text-black-80 font-size-lg mt-1">{props.event}<br></br></span>
                            <span className="text-black-80 font-size-sm mt-1"><br></br>{props.date}<br></br></span>
                            <span className="text-black-80 font-size-sm mt-1">{props.time}<br></br></span>
                            <IconButton
                                style={{ position: 'absolute', right: '0.5rem', top: '0.5rem' }}
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                            >

                                <MenuItem>Going/Not</MenuItem>
                                <MenuItem onClick={handleClickPopover3}>View event info</MenuItem>


                            </Menu>
                            <Popover
                                open={open3}
                                anchorEl={anchorEl3}
                                onClose={handleClosePopover3}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center'
                                }}
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center'
                                }}>
                                <Box className="p-4" style={{ width: '18rem' }}>
                                    {props.description}

                                </Box>
                            </Popover>
                            
                        </div>



                            
                    </div>
                    <div className="mt-3">
                        <FontAwesomeIcon
                            icon={['fas', 'circle']}
                            className="text-success mr-1"
                        />
                        <span className="text-black-80">{props.status}</span>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}