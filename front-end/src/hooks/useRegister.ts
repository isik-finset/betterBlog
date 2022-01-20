import React, { useState } from 'react';

export default function useRegister <Type>(initialForm: Type) {

    const [ form, setForm ] = useState<Type>(initialForm)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(form))
        const data = new FormData(e.currentTarget);
        console.log({
            firsName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
    })
    }

    return {
        form,
        handleChange,
        handleSubmit
    }
}


