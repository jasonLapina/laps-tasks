import { Center, Spinner } from "@chakra-ui/react";
function MySpinner() {
  return (
    <Center my='200px'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='pink'
        size='xl'
      />
    </Center>
  );
}

export default MySpinner;
