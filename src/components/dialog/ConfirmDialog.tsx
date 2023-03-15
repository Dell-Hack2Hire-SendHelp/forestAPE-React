import { DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

import { AiOutlineQuestionCircle, AiFillExclamationCircle } from 'react-icons/ai';

import { useDialog } from "../../hooks/useDialog";



// Variants of the dialog
type DialogType = "primary" | "error";

const DIALOG_PRESET: Record<DialogType, { color: DialogType, icon: JSX.Element }> = {
    primary: {
        color: 'primary',
        icon: <AiOutlineQuestionCircle className='mr-2 inline' fontSize='x-large' />,
    },
    error: {
        color: 'error',
        icon: <AiFillExclamationCircle className='mr-2 inline' fontSize='x-large' />,
    },
}



export interface IConfirmDialogProps {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel?: () => void;
    type?: DialogType;
}




export default function ConfirmDialog({ 
    title, 
    message, 
    onConfirm, 
    onCancel,
    type = 'primary',
}: IConfirmDialogProps) {

    const { closeDialog } = useDialog();

    const handleConfirm = () => {
        onConfirm();
        closeDialog();
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        closeDialog();
    };

    const { color, icon } = DIALOG_PRESET[type];


    return <>
        <DialogTitle>
            <Typography className='text-2xl font-bold flex items-center' color={color}>
                { icon }
                { title }
            </Typography>
        </DialogTitle>
    
        <DialogContent className='pb-3'>
            { message }
        </DialogContent>

        <DialogActions>
            <Button variant="contained" color={color} type='submit' onClick={ handleConfirm }>
                Confirm
            </Button>
            <Button variant="outlined" color={color} onClick={ handleCancel }>
                Cancel
            </Button>
        </DialogActions>
    </>
}