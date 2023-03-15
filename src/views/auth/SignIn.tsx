
import { Box, Typography, Button } from '@mui/material';
import { FormContainer, TextFieldElement, PasswordElement } from 'react-hook-form-mui';
import { authAPI } from '../../API/auth';
import { AiOutlineLogin } from 'react-icons/ai';


export default function SignIn() {

    return (
        <Box className='flex flex-col items-center justify-center mt-24'>

            <Box className='flex items-center gap-3'>
                <img src="/images/APELogo.png" alt="ForestAPE Logo" className='w-14 h-14' />

                <Typography variant='h4' className='font-["Cantora_One"] font-bold' color='primary'>
                    ForestAPE
                </Typography>
            </Box>

            <Typography variant='h5' className='font-["Cantora_One"]' color='primary'>
                Customer Sign In
            </Typography>

            <FormContainer
                defaultValues={{ username: '', password: '' }}
                onSuccess={data => authAPI.login(data)}
            >
                <Box className='flex flex-col gap-3 mt-5'>
                    <TextFieldElement
                        name='username'
                        label='Username'
                        variant='outlined'
                        size='small'
                        validation={{ required: 'Username is required' }}
                        required
                    />

                    <PasswordElement
                        name='password'
                        label='Password'
                        variant='outlined'
                        size='small'
                        validation={{ required: 'Password is required' }}
                        required
                    />

                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        size='large'
                        className='w-full'
                    >
                        Sign In
                        <AiOutlineLogin className='ml-2' />
                    </Button>
                </Box>

            </FormContainer>
        </Box>
    );
}
