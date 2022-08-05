import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavBackdrop } from './navBackdrop';

function NavMenu() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: { sx: 'flex', lg: 'none' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleToggle}
        color='inherit'>
        <MenuIcon />
      </IconButton>
      <NavBackdrop open={open} handleClose={handleClose} />
    </Box>
  );
}

export { NavMenu };
