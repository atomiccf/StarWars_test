import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Logo from '../../assets/602bb87d5c5b2300043add96 (1).png'
import  "./Header.css";

const Header:React.FC = () =>{
    const boxStyle = { flexGrow: 1, width:"100%", paddingTop:'0', backgroundColor:'black' };
    const appBarStyle = {  backgroundColor:'black' };

    return (
        <div className="header_container">
            <Box sx={boxStyle}>
                <AppBar sx={appBarStyle} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            href="/"
                        >
                            <img src={Logo} alt="icon"/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}


export default Header;