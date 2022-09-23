import { Button, Fab, FormControl, Grid, Input, InputAdornment, InputLabel, List, ListItem, ListItemAvatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GrFacebookOption } from "react-icons/gr"
import { IoKeyOutline } from "react-icons/io5"
import { MdOutlineContactMail } from "react-icons/md"
import { AiOutlineMail, AiOutlineGoogle, AiFillLinkedin, AiOutlineTwitter, AiOutlineCloseCircle} from "react-icons/ai"
const Login = () => {
    return (
        <>

            <Grid container spacing={2} sx={{ position: "relative", width: "600px" }}>
                <Box sx={{
                    width: "600px", height: '42px', backgroundColor: "#42cdac", display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center", alignItems: "center", ml: "1rem"
                    }}>
                        <MdOutlineContactMail size={'2em'} color={"white"} />
                        <Typography sx={{ ml: "1.5rem", fontSize: "18px", color: "white", fontFamily: "Poppins, sans-serif", fontWeight: "800" }}>SIGN IN OR REGISTER</Typography>
                    </Box>
                   
                </Box>
                <Grid item md={6}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <FormControl variant="standard">
                            <Input
                                id="input-with-icon-adornment"
                                placeholder='E-mail Address'
                                startAdornment={
                                    <InputAdornment position="start" >
                                        <AiOutlineMail size={'1.5em'} />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <Input
                                id="input-with-icon-adornment"
                                placeholder='Password'
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IoKeyOutline size={'1.5em'} />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Typography sx={{ fontSize: "14px", color: "#888888", fontFamily: "Poppins, sans-serif", fontWeight: "700" }}>Login with your social account</Typography>
                        <Box>
                            <Fab color="primary" aria-label="add" size="medium" sx={{ borderRadius: "1rem", backgroundColor: "#DD4B39", mr: ".3rem" }}>
                                <AiOutlineGoogle />
                            </Fab>
                            <Fab color="primary" aria-label="add" size="medium" sx={{ borderRadius: "1rem", mr: ".3rem" }}>
                                <GrFacebookOption />
                            </Fab>
                            <Fab color="primary" aria-label="add" size="medium" sx={{ borderRadius: "1rem", backgroundColor: "#55ACEE", mr: ".3rem" }}>
                                <AiOutlineTwitter />
                            </Fab>
                            <Fab color="primary" aria-label="add" size="medium" sx={{ borderRadius: "1rem", backgroundColor: "#0E76A8" }}>
                                <AiFillLinkedin />
                            </Fab>
                        </Box>
                        <Typography sx={{ fontSize: "14px", color: "#888888", fontFamily: "Poppins, sans-serif" }}>Forget your Password?</Typography>
                        <Button sx={{
                            fontSize: "16px", backgroundColor: "#666666", padding: "8px 20px",
                            color: "white", fontFamily: "Poppins, sans-serif",

                            "&:hover": {
                                backgroundColor: "#42cdac"
                            }
                        }}>Login</Button>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <Typography variant='h2' sx={{ fontSize: "18px", color: "#888888", fontWeight: "700", mb: "1rem", fontFamily: "Poppins, sans-serif" }}>NEW HERE?</Typography>
                        <Typography sx={{ fontSize: "14px", color: "#888888", fontFamily: "Poppins, sans-serif" }}>Registration is free and easy!</Typography>
                        <List sx={{ fontSize: "14px", color: "#888888", mb: "1rem", fontFamily: "Poppins, sans-serif" }}>
                            <ListItem>Faster checkout</ListItem>
                            <ListItem>Save multiple shipping addresses</ListItem>
                            <ListItem>View and track orders and more</ListItem>
                        </List>
                        <Button sx={{
                            fontSize: "16px", backgroundColor: "#666666", padding: "8px 20px",
                            color: "white", fontFamily: "Poppins, sans-serif",

                            "&:hover": {
                                backgroundColor: "#42cdac"
                            }
                        }}>CREATE AN ACCOUNT</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login