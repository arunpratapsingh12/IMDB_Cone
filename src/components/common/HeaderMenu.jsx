import { Menu, MenuItem } from "@mui/material";
import {  NavLink } from 'react-router-dom'
import routePath from '../../constants/routes.js'






const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu id="basic-menu" anchorEl={open} open={openMenu} onClose={handleClose}>
      <NavLink
        to={`${routePath.categories}?category=popular`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </NavLink>

      <NavLink
        to={`${routePath.categories}?category=toprated`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Toprated</MenuItem>
      </NavLink>

      <NavLink
        to={`${routePath.categories}?category=upcoming`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </NavLink>
    </Menu>
  );
};

export default HeaderMenu;
