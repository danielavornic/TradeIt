import { Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <div className='loader--container'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='orange.500'
        size='xl'
      />
    </div>
  );
};
