import {FC, PropsWithChildren} from "react";
import {Box} from "@mui/material";

const ServerTray: FC<PropsWithChildren> = ({ children }) => {
    return <Box sx={{
        width: "240px",
        borderRight: "1px solid #303030"
    }}>
        {children}
    </Box>
}

export default ServerTray;