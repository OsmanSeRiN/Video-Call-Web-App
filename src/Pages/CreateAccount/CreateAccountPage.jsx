import { Box, AbsoluteCenter, FormControl, FormLabel, Input, FormErrorMessage, Button, Checkbox, Flex, Text, Wrap, Spacer, Grid, GridItem } from '@chakra-ui/react';
import "./CreateAccountPage.css"
import { AddIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createUser } from '../../Models/Toolkit/Active User/user';
import { BsBoxArrowInRight } from 'react-icons/bs';

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
        dispatch(createUser({ email, password, name, isApproval }))
    }

    const appStatus = useSelector((state) => state.user.appStatus);
    console.log("Uygulama Durumu" + appStatus.error)

    const errorMessage = appStatus.error ? "Zaten hesabın var.❗❗❗" : ""
    const busy = appStatus.busy

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
                        <Grid templateColumns="repeat(10, 1fr)" gap={4} alignItems="center" mb={4}>
                            <GridItem colSpan={2}/>
                            <GridItem colSpan={6}>
                                <h1 className='login-title'>Video Call</h1>
                            </GridItem>
                            <GridItem colSpan={2} display="flex" justifyContent="flex-end">
                                <Button leftIcon={<BsBoxArrowInRight colorScheme='blue' fontSize="30px" />} colorScheme='blue' variant='ghost'>
                                </Button>
                            </GridItem>
                        </Grid>


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

                                <Flex mt={5} alignItems="center">
                                    <Checkbox colorScheme='blue' isChecked={isApproval} onChange={(e) => setIsApproval(e.target.checked)}>
                                        I have read and approve
                                    </Checkbox>
                                </Flex>

                                <Button isLoading={busy} type='submit' leftIcon={<AddIcon />} colorScheme='blue' variant='solid' mt={6}>
                                    Create Account
                                </Button>

                                <Text color="red" fontSize='l' mt={5}>{errorMessage}</Text>
                            </FormControl>
                        </form>
                    </Box>
                </AbsoluteCenter>
            </Box>
        </>
    );
}

export default CreateAccountPage;
