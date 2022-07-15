import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
const NotFoundPage = (props) => {
  return  <Box
        sx={{
            height: 300,
            flexGrow: 1,
            minWidth: 300,

        }}
    >

        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open={true}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            sx={{
                display: 'flex',
                p: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    display : "flex",
                    flexDirection: "column",
                    boxShadow: (theme) => theme.shadows[5],
                    p: 4,
                }}
            >

                <Typography sx={{margin: "0 auto"}} id="server-modal-title" variant="h6" component="h2">
                    {props.text}                </Typography>
                <Typography id="server-modal-description" sx={{ pt: 3, margin: "0 auto" }}>
                    <Link to={props.link ? props.link : "/"}> <Button variant="contained">Home</Button></Link>
                </Typography>
            </Box>
        </Modal>
    </Box>

}
export default NotFoundPage