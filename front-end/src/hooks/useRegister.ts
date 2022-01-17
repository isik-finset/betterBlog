import React, { useState } from 'react';

// interface SignUpFormTypes {
//     firstName?: string
//     lastName?: string
//     email?: string
//     password?: string
// }

export default function useRegister <Type>(initialForm: Type) {

    const [ form, setForm ] = useState<Type>(initialForm)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(form))
    }

    return {
        form,
        handleChange,
        handleSubmit
    }
}


