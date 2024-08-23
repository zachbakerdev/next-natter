import {FC, PropsWithChildren} from "react";
import {Box} from "@mui/material";

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
    return <Box sx={{
        borderRight: "1px solid #303030",
        width: "80px"
    }}>
        {children}
    </Box>;
}

export default Sidebar;