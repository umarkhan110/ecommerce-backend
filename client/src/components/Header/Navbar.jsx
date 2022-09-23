import { alpha, AppBar, Avatar, Box, Button, InputBase, Modal, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import logo from "../../img/logo.svg"
import { RiArrowDropDownLine } from "react-icons/ri"
import { MdArrowDropDown } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi"
import { HiShoppingBag } from "react-icons/hi"
import Select from 'react-select'
import NavbarMenu from './NavbarMenu'
import LoginModal from "./Login"
import { Link } from 'react-router-dom';
const options = [
    { value: '$ US Dollar', label: '$ US Dollar' },
    { value: '€ Euro', label: '€ Euro' },
    { value: '£ Pound Sterling', label: '£ Pound Sterling' },
];
const options2 = [
    { value: 'English', label: 'English' },
    { value: 'Urdu', label: 'Urdu' },
];
const StyledTool = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#42cdac",
}))
const Langua = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}))
const Selct = styled(Select)(({ theme }) => ({
    marginRight: "10px",
    ".css-1pahdxg-control": {
        borderColor: "white",
        boxShadow: "0 0 1px white"
    },
    ".css-26l3qy-menu": {
        color: "black",
        backgroundColor: "white",
        "div": {
            color: "black"
        }
    },
    "div": {
        color: "white",
        backgroundColor: "transparent",

    }
}))
const Selct2 = styled(Select)(({ theme }) => ({
    color: "red",
    ".css-1pahdxg-control": {
        borderColor: "white",
        boxShadow: "0 0 1px white"
    },
    ".css-26l3qy-menu": {
        color: "black",
        backgroundColor: "white",
        "div": {
            color: "black"
        }
    },
    "div": {
        color: "white",
        backgroundColor: "transparent",
    }
}))
const Logo = styled("div")(({ theme }) => ({

}))
const Login = styled("div")(({ theme }) => ({
    "button": {
        color: "white"
    }
}))
// Second Navbar
const StyledTool2 = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    "button": {
        color: "black"
    }
}))
const Pages = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}))
const CartSection = styled("div")(({ theme }) => ({

}))
const Humburger = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 2,
};
const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    return (
        <AppBar sx={{ position: "fixed" }}>
            <StyledTool>
                <Langua>
                    <Selct
                        defaultValue={options[0]}
                        onChange={setSelectedOption}
                        options={options}
                    />
                    <Selct2
                        defaultValue={options2[0]}
                        onChange={setSelectedOption2}
                        options={options2}
                    />
                </Langua>
                <Logo>
                    <Avatar src={logo} sx={{
                        width: "100px", height: "80px", borderRadius: "0", filter: "invert(100%)",
                    }}></Avatar>
                </Logo>
                <Login>
                    <Button onClick={handleOpen}>Login</Button>
                    <Button >Register</Button>
                </Login>
            </StyledTool>

            <StyledTool2>
                <Pages>
                    <Button>Home <MdArrowDropDown /></Button>
                    <Button>Pages <MdArrowDropDown /></Button>
                    <Button>Blog <MdArrowDropDown /></Button>
                    <Button>Shop <MdArrowDropDown /></Button>
                    <Button>Collection <MdArrowDropDown /></Button>
                    <Button>MarketPlace <MdArrowDropDown /></Button>
                </Pages>
                <Humburger>
                    <NavbarMenu />
                </Humburger>
                <CartSection>
                    <Button>
                        <BiSearchAlt2 />
                    </Button>
                    <Button><Link to='/cart'><HiShoppingBag /> {cart.quantity} items</Link></Button>
                </CartSection>
            </StyledTool2>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <LoginModal />
                </Box>
            </Modal>
        </AppBar>
    )
}

export default Navbar