import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Box,Wrap,Flex } from '@chakra-ui/react'



export const PlusButton = () => {

    return (
        <Box
        display='flex'
        alignItems='right'
        justifyContent='right'
        py={2}
        bgRepeat='no-repeat'
        mr={3}
      >    
<IconButton
  boxShadow='md' rounded='md'
  aria-label='Call Sage'
  position = 'fixed'
  top={550}
  fontSize='20px'
  icon={<AddIcon />}
  color = 'D3DEE7'
/>
</Box>

    );
};