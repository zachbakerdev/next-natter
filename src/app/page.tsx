import React, {FC} from "react";
import {Button, Container, CssBaseline, Divider, Typography} from "@mui/material";

const Page: FC = () => {
    return <Container sx={{py: 2}}>
        <CssBaseline />
        <Typography variant="h3">Welcome to Next Natter!</Typography>
        <Typography variant="subtitle1">A Discord Alternative</Typography>
        <Divider sx={{mb: 2}}/>
        <Button variant="contained" sx={{marginRight: 1}}>Login</Button>
        <Button variant="contained">Register</Button>
    </Container>
}

export default Page;