
import { Box, Typography, Button } from '@mui/material';
import { FormContainer, TextFieldElement, PasswordElement } from 'react-hook-form-mui';
import { authAPI } from '../../API/auth';
import { AiOutlineLogin } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';

import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { setUser } from '../../redux/userSlice';
import { AppUser } from '../../types/AppUser';


export default function SignIn() {
    const { alertError, alertInfo,alertSuccess,alertWarning } = useToast();
    const navigateTo = useNavigate();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.user.user);

    const loginSession = (data: any) => {
        authAPI.login(data).then((res) => {
            const user: AppUser = res.user;
            dispatch(setUser(user));
            alertSuccess("Logged in!");
            if(user.role === "CUSTOMER") {
                navigateTo("/customer");
            } else if(user.role === "APE") {
                navigateTo("/APE");
            }
            else if(user.role === "PLANTER") {
                navigateTo("/sukau");
            }else { throw new Error("Invalid role!"); }
        }).catch((err) => {
            alertError("Error logging in! Please check your password");
        });
        
    };

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
                onSuccess={loginSession}
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
