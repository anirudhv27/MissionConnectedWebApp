import React from 'react';
import Popup from 'reactjs-popup';
import { Grid, Card, IconButton, Menu, MenuItem, Button, Box, Popover } from '@material-ui/core';
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

        <Popup
          modal
          open={open3}
          anchorEl={anchorEl3}
          onClose={handleClosePopover3}
        >
          {close => (
            <div style={{
              width: '70vw',
              height: '70vh',
              backgroundColor: 'white',
              border: '1px solid gray',
              borderRadius: '0.5rem',
              overflow: 'auto',
              padding: '1vw',
              

              }}>
              <div className="close" onClick={close} style={{padding: '0.5vw'}}>
                &times;
              </div>
              <div className="content" style={{
                padding: '3vw'
              }}>
                <div className="details" style={{
                  width: '45%', 
                  float: 'left',
                  }}>
                  <img src={props.link} style={{width: '100%', borderRadius: '0.5rem'}}/>

                  <div className="header text-black font-size-xxl font-weight-bold"><br></br>{props.name}</div>
                  <div className="text-black font-size-lg">Members: {props.members} joined</div>
                  <div className="text-black font-size-lg font-weight-bold"><br></br>{props.meetings}<br></br></div>
                </div>
                <div className="bg-light-gray" style={{
                  width: '50%',
                  height: '90%',
                  padding: '2vw',
                  borderRadius: '0.5rem',
                  float: 'right',
                  top: '0',
                }}>
                  <div className="text-black font-size-xxl font-weight-bold" style={{marginBottom: '2vh'}}>Club Description</div>
                  <div className="description font-size-lg" style={{maxHeight: '30vh', overflow: 'auto'}}>{props.description}</div>
                  <div className="text-center" style={{padding: '2vw'}}>
                    <Button className="font-weight-bold" style={{backgroundColor: 'rgb(194, 212, 194)', width: '50%', height: '6vh'}}>
                      <div className="font-size-lg">Join Club</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
        
      </div>
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
