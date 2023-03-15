import { Box, Typography, Button, MenuItem } from '@mui/material';
import { FormContainer, TextFieldElement, SelectElement } from 'react-hook-form-mui';

export default function Purchase() {
    return(
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant='h1' color='primary'>
                Purchase
            </Typography>
            <FormContainer
                defaultValues={{ 
                    treenumbers: '1', 
                    receiversname: '', 
                    receiversemail:'', 
                    message: 'This goes towards the restoration of the forest corridor along the Lower Kinabatangan, Sabah, malaysia, Borneo.' 
                }}
                onSuccess={data => console.log(data)}
            >
                <Box className='flex'>
                    {/* 1, 3, 5, 10, 25, 50 */}
                    <Typography variant='h5' color='primary'>
                        Number of Trees:
                    </Typography>
                    <SelectElement
                        name='treenumbers'
                        label='Number of Trees'
                        variant='outlined'
                        size='medium'
                        options={[
                            {
                                id: '1',
                                label: '1'
                            },
                            {
                                id: '3',
                                label: '3'
                            },
                            {
                                id: '5',
                                label: '5'
                            },
                            {
                                id: '10',
                                label: '10'
                            },
                            {
                                id: '25',
                                label: '25'
                            },
                            {
                                id: '50',
                                label: '50'
                            }
                          ]}
                        validation={{ required: 'Number of Trees is required' }}
                        required
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                        Receiver's Name:
                    </Typography>
                    <TextFieldElement
                        name='receiversname'
                        label="Receiver's Name"
                        variant='outlined'
                        size='medium'
                        validation={{ required: "Receiver's name is required" }}
                        required
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                        Receiver's Email:
                    </Typography>
                    <TextFieldElement
                        name='receiversemail'
                        label="Receiver's Email"
                        variant='outlined'
                        size='medium'
                        validation={{ required: "Receiver's email is required" }}
                        required
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                          Personalized Message:
                    </Typography>
                    <TextFieldElement
                        name='message'
                        label='Personalized Message'
                        variant='outlined'
                        size='medium'
                    />
                </Box>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    className='w-full'
                >
                    Purchase
                </Button>
            </FormContainer>
        </Box>      
        </>
    );
}