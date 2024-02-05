import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import Note from "../assets/note.svg";
function Projects() {
  return (
    <Box py='40px' px='16px'>
      <VStack gap='32px'>
        <Image maxW='240px' mx='auto' src={Note} />
        <Text fontSize='24px' fontWeight='bold'>
          No Project Selected
        </Text>
        <Text>Select a project or get started with a new one</Text>
        <Button bgColor='fuchsia'>Create new project</Button>
      </VStack>
    </Box>
  );
}

export default Projects;
