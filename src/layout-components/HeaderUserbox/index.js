import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar5 from '../../assets/images/avatars/vigneshmissionconnectedpfp.jpeg';

import { useAuth } from "../../contexts/AuthContext";

export default function HeaderUserbox() {
  const [error, setError] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  async function handleLogout() {
    alert("logout");
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (err){
      console.error(err);
      setError("Failed to Log Out");
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (currentUser.email.indexOf("fusdk12.net") == -1){
    handleLogout()
  }
  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
          <Avatar sizes="44" alt="Emma Taylor" src={currentUser.photoURL} />
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">{currentUser.displayName}</div>
          <span className="text-white-50">MissionConnected</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              <Avatar sizes="44" alt="Emma Taylor" src={currentUser.photoURL} />
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
              {currentUser.displayName}
              </div>
              <span className="text-black-50 text-center">
                MissionConnected Developer
              </span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button>My Account</ListItem>
            <ListItem button>Profile settings</ListItem>
            <ListItem button>Active tasks</ListItem>
            <Divider className="w-100" />
            <ListItem className="d-block rounded-bottom px-3 pt-3 pb-0 text-center">
              <Tooltip arrow title="Twitter">
                <Button color="default" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}
