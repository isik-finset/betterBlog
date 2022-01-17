import React, { useState } from 'react';


export default function useBlog<Type>(initialBlog: Type) {
    const [ blog, setBlog ] = useState<Type>(initialBlog)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(blog))
        const data = new FormData(e.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            title: data.get('title'),
            description: data.get('description'),
            body: data.get('body'),
            topic: data.get('topic'),
    })}


    return {
        blog,
        handleChange,
        handleSubmit,
    }
}