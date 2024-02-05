import {
  Box,
  Button,
  HStack,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

function AddProject() {
  return (
    <Box>
      <HStack mb='40px' justifyContent='end' gap='16px'>
        <Button variant='ghost'>Cancel</Button>
        <Button>Save</Button>
      </HStack>
      <Box maxW='80%' mx='auto'>
        <VStack gap='24px'>
          <FormControl variant='floating'>
            <Input placeholder=' ' />
            <FormLabel>Title</FormLabel>
          </FormControl>
          <FormControl variant='floating'>
            <Textarea placeholder=' ' />
            <FormLabel>Description</FormLabel>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
}

export default AddProject;
