import { Box, Link, Typography } from "@mui/material";

import { MdLocalPhone, MdOutlineEmail } from 'react-icons/md';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';



function Footer() {

    return <>
        <Box className='p-8 bg-gray-900 text-gray-200'>
            <Box className='container m-auto grid md:grid-cols-3 gap-y-10 gap-x-4'>
                <Box className=''>
                    <Typography className='text-sm font-bold'>
                        ANIMAL PROJECTS & ENVIRONMENTAL EDUCATION (APE MALAYSIA)
                    </Typography>

                    <img src='/images/APELogo.png' alt='APE Logo' className='mt-10 w-32 h-32 p-1 rounded-md bg-white' />
                </Box>

                <Box className=''>
                    <Typography className='text-sm font-bold'>
                        ACCREDITATION
                    </Typography>

                    <Typography className='text-sm mt-6'>
                        Animal Projects & Environmental Education is a certified social enterprise by the Ministry of Entrepreneur Development Malaysia.
                    </Typography>

                    <Typography className='text-sm my-6'>
                        Registration number: 200701028408 (786430-A)
                    </Typography>

                    <Link className='text-white' href='https://apemalaysia.com/privacy-policy/' target='_blank' rel='noreferrer'>
                        Privacy Policy
                    </Link>
                </Box>

                <Box className=''>
                    <Typography className='text-sm font-bold'>
                        CONTACT INFO
                    </Typography>

                    <Typography className='text-sm mt-6'>
                        Address: Unit 1005, Lobby 2, Block A, Damansara Intan, 47400 Petaling Jaya, Selangor
                    </Typography>

                    <Typography className='text-sm my-6'>
                        <MdLocalPhone className='inline-block mr-2' />
                        +603-7724 2272
                    </Typography>

                    <Typography className='text-sm'>
                        <MdOutlineEmail className='inline-block mr-2' />
                        info@apemalaysia.com
                    </Typography>
                </Box>
            </Box>
        </Box>

        <Box className='px-8 py-4 bg-black text-gray-300'>
            <Box className='container m-auto flex justify-between flex-wrap'>
                <Box className='flex'>
                    <Link className='text-white' href='https://www.facebook.com/ApeMalaysia' target='_blank' rel='noreferrer'>
                        <AiFillFacebook className='text-2xl mr-4' />
                    </Link>
                    <Link className='text-white' href='https://twitter.com/ApeMalaysia' target='_blank' rel='noreferrer'>
                        <AiOutlineTwitter className='text-2xl mr-4' />
                    </Link>
                    <Link className='text-white' href='https://www.instagram.com/apemalaysia' target='_blank' rel='noreferrer'>
                        <AiOutlineInstagram className='text-2xl mr-4' />
                    </Link>
                    <Link className='text-white' href='https://www.youtube.com/user/ApeMalaysia' target='_blank' rel='noreferrer'>
                        <AiFillYoutube className='text-2xl' />
                    </Link>
                </Box>

                <Typography className='text-sm'>
                    Copyright 2022 Animal Projects & Environmental Education, All Rights Reserved
                </Typography>
            </Box>
        </Box>
    </>
}



export default Footer;