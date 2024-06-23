import { Box, AbsoluteCenter, FormControl, FormLabel, Input, FormErrorMessage, Button, Checkbox, Flex } from '@chakra-ui/react';
import "./CreateAccountPage.css"
import { AddIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createUser } from '../../Models/Toolkit/Active User/user';

function CreateAccountPage() {
    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isApproval, setIsApproval] = useState(false);

    const dispatch = useDispatch();
    //email,password,name,isApproval,id}
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser({email,password,name,isApproval}))
    }

    return (
        <>
            <Box bg="#F4F4F4" width="100vw" height="100vh">
                <AbsoluteCenter>
                    <Box
                        bg='white'
                        width="25vw"
                        height="fit-content"
                        boxShadow='2xl'
                        borderRadius='30px'
                        p={6} // Padding değeri düzenlendi
                    >
                        <h1 className='login-title'>Video Cell</h1>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel mt="5px">Name</FormLabel>
                                <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                                <FormLabel mt="5px">Email address</FormLabel>
                                <Input type='email' value={email} onChange={(e) => setMail(e.target.value)} />

                                <FormLabel mt="5px">Password</FormLabel>
                                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                                <FormLabel mt="5px">Remember Password</FormLabel>
                                <Input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} />

                                {/* FormErrorMessage sadece hata durumunda gösterilmelidir */}
                                {/* <FormErrorMessage>Error 😮😮</FormErrorMessage> */}

                                <Flex mt={5} alignItems="center">
                                    <Checkbox colorScheme='blue' isChecked={isApproval} onChange={(e) => setIsApproval(e.target.checked)}>
                                        I have read and approve
                                    </Checkbox>
                                </Flex>

                                <Button type='submit' leftIcon={<AddIcon />} colorScheme='blue' variant='solid' mt={6}>
                                    Create Account
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </AbsoluteCenter>
            </Box>
        </>
    );
}

export default CreateAccountPage;
