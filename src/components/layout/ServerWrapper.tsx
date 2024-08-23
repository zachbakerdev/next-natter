import {FC, PropsWithChildren} from "react";
import {Box, CssBaseline} from "@mui/material";
import Sidebar from "@/components/layout/Sidebar";
import ServerTray from "@/components/layout/ServerTray";

const ServerWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <Box sx={{
        display: "flex",
        height: "100vh"
    }}>
        <CssBaseline />
        <Sidebar />
        <ServerTray />
        <Box component="main" sx={{px: 4, py: 2}}>
            {children}
        </Box>
    </Box>
}

export default ServerWrapper;