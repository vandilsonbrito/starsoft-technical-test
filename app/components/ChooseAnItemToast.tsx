'use client';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ChooseAnItemToast({ toastValue }: { toastValue: boolean }) {

    useEffect(() => {
        if(toastValue) {
            toast('Escolha um item!');
        }
    }, [toastValue])
     
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    )
}