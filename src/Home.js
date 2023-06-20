import React from "react";
import {Box} from "@mui/material";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const Home = () =>{
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setSidebarOpen((prevState) => !prevState);
    };

    return(
        <>
            <Box sx={{ display: 'flex' }}>
                <Header handleDrawerToggle={handleDrawerToggle}/>
                <Sidebar isSidebarOpen={isSidebarOpen} handleDrawerToggle={handleDrawerToggle} />
                <Main />
            </Box>
        </>
    )
}
export default Home;