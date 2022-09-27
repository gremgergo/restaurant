import React from 'react';
import './MenuIcon.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function MenuIcon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='material-symbols-outlined'>
          menu
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <AnchorLink href='#menu'>
          <MenuItem onClick={handleClose}>Menu</MenuItem> 
        </AnchorLink>
        <AnchorLink href='#corporate-menu'>
          <MenuItem onClick={handleClose}>Corporative</MenuItem>
        </AnchorLink>
        <AnchorLink href='#footer'>
          <MenuItem onClick={handleClose}>Contacts</MenuItem>
        </AnchorLink>
      </Menu>
    </div>
  );
}
export default MenuIcon
