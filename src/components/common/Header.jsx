import {
  AppBar,
  Toolbar,
  InputBase,
  styled,
  Box,
  Typography,
} from "@mui/material";
import { logoURL } from "../../constants/constant";
import { ExpandMore, Menu } from "@mui/icons-material";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import routePath from "../../constants/routes";




//styling using styled library
const Styledtoolbar = styled(Toolbar)`
background:#121212;
min-height:56 !important;
padding: 0 115px !important;
justify-content: space-between;


& > *{
  padding: 0px 16px;
}
& > div{
  display:flex;
  align-item:center;
  cursor:pointer;
  & > p{
    font-size: 14;
    font-weight:600
  }
}

& > p{
  font-size: 14;
    font-weight:600;
}
`;

const InputBseStyle = styled(InputBase)`
background: #ffffff;
height: 33px;
width:55%;
border-radius: 5px
`

const Logo = styled('img')({
  width: 64
})

const Header = () => {

  const [open, setopen] = React.useState(null);
  const handleopen = (e) => {
    setopen(e.currentTarget);
  }

  const navigate = useNavigate();
    const handleClose = () => {
      setopen(null);
    };
  return (
    <AppBar position="static">
      <Styledtoolbar>
        <Logo
          src={logoURL}
          alt="Logo"
          onClick={() => navigate(routePath.home)}
        />
        <Box onClick={handleopen}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputBseStyle />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Typography>signIn</Typography>
        <Box>
          <Typography>Menu</Typography>
          <ExpandMore />
        </Box>
      </Styledtoolbar>
    </AppBar>
  );
};
export default Header;
