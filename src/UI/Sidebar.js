import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/add-new");
  };
  return (
    <Box bgColor='pink' py='24px' borderRadius='30px 0px 0px 30px'>
      <VStack px='8px' gap='24px'>
        <Heading>YOUR PROJECTS</Heading>
        <Button onClick={handleAdd}>+ Add Project</Button>
      </VStack>
    </Box>
  );
}

export default Sidebar;
