import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
function Layout() {
  return (
    <Box
      display='grid'
      gridTemplateColumns='1fr 2fr'
      maxW='1440px'
      mx='auto'
      py='40px'
      h='100vh'
      // overflow='hidden'
    >
      <Sidebar />
      <Box
        bgColor='ghostwhite'
        borderRadius='0 30px 30px 0'
        overflowY='auto'
        py='40px'
        px='16px'
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
