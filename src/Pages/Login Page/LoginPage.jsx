import { Box, AbsoluteCenter, FormControl, FormLabel, Input,  FormErrorMessage, Button, Checkbox, Flex } from '@chakra-ui/react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import "../CreateAccount/CreateAccountPage.css"

const LoginPage = () => {
  var background = "#F4F4F4"

    return (
        <>
            <Box bg={background} width="100vw" height="100vh">
                <AbsoluteCenter>
                    <Box
                        bg='white'
                        width="25vw"
                        height="fit-content"
                        boxShadow='2xl'
                        borderRadius='30'
                        p={30}
                    >
                        <h1 className='login-title'>Video Call</h1>
                        <FormControl p={30}>

                            <FormLabel mt="5px">Email address</FormLabel>
                            <Input type='email' />

                            <FormLabel mt="5px">Password</FormLabel>
                            <Input type='email' />

                            <FormErrorMessage>Error 😮😮</FormErrorMessage>



                            <Button leftIcon={<BsBoxArrowInRight />} colorScheme='blue' variant='solid' mt={30}>
                                Login Account
                            </Button>

                        </FormControl>
                    </Box>
                </AbsoluteCenter>
            </Box>
        </>
    );
}

export default LoginPage