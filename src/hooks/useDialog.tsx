import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

import ConfirmDialog, { IConfirmDialogProps } from "../components/dialog/ConfirmDialog";


// A custom hook that helps you to useContext on DialogContext and return whatever is returned from the context
export const useDialog = () => {

    // The context consisting of openDialog and closeDialog
    const { openDialog, closeDialog } = useContext(DialogContext)!;

    // Opens a ConfirmDialog
    const openConfirmDialog = ({
        title, 
        message, 
        onConfirm, 
        onCancel,
        type
    }: IConfirmDialogProps) => openDialog(
        <ConfirmDialog 
            title={ title } 
            message={ message } 
            onConfirm={ onConfirm } 
            onCancel={ onCancel } 
            type={ type }
        />
    );


    return { openDialog, closeDialog, openConfirmDialog };
};