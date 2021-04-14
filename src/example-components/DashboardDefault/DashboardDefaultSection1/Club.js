import React from "react";
import { Grid, Card, IconButton, Menu, MenuItem, Box, Popover } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 20;


export default function Club(props) {
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
  <Grid item xs={12} sm={6} lg={3}>
    <Card className="p-3 mb-4" style={{ 
      backgroundImage: `url(${props.link})`, 
      backgroundSize: 'cover',
      opacity: '0.5',
      height: '10rem' 
    }}>
      <div>
        <IconButton
          style={{position: 'absolute', right: '0.5rem', top: '0.5rem'}}
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

          <MenuItem>Leave club</MenuItem>
          <MenuItem onClick={handleClickPopover3}>View club info</MenuItem>
          
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
          <Box className="p-4" style={{ width: '22rem' }}>
            {props.description}
          </Box>
        </Popover>
      </div>
  
      {/* <Menus /> */}
      <div className="text-black pt-2 text-center font-weight-bold" style={{
        position: 'absolute', 
        left: '0', 
        right: '0', 
        bottom: '1rem', 
        alignItems: 'center'
      }}>
        {props.name}
      </div>
    </Card>
  </Grid>
    
  );
}
