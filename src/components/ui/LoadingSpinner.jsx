import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <VStack spacing={3}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
      <Text fontSize="sm" color="gray.500">
        {message}
      </Text>
    </VStack>
  );
};

export default LoadingSpinner;