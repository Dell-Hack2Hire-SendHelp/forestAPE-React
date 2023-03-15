// import useEffect
import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import {customerAPI} from '../../API/customer';

function History(){

    const tree = {
        treeID: 0,
        coordinate: ""
    }

    const [trees, setTrees] = useState([tree]);
    const [custID, setCustID] = useState('0');

    useEffect(() => {
        console.log('History page loaded');
        customerAPI.viewHistory(custID)
        .then((res) => {
            setTrees(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return(
        <>
        <Typography variant='h3' color='primary'>
            My Planted Trees
        </Typography>
        {
            trees.map((tree) => {
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <Typography variant='h5' color='primary'>
                        Tree ID: {tree.treeID}
                    </Typography>
                </Box>
            })
        }
        </>
    );
}

export default History;