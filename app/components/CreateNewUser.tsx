"use client"
import { TextInput, Button, Group, Box, FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { postData } from '../data/Mutation';
import { IconFileUpload } from '@tabler/icons-react';
import { Bounce, toast } from 'react-toastify';

export interface FormValues {
    email: string;
    name: string;
    avatar?: string;
    createdAt?: Date;
}

export function CreateNewUser() {

    const [pic, setPic] = useState()

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            avatar: '',
            createdAt: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleForm = async (formData: any) => {
        formData.avatar = pic;
        const response = await postData(formData)
        console.log(response)
        toast('Wow! user added', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const icon = <IconFileUpload style={{ width: "2rem", height: "2rem" }} stroke={1.2} />

    const postDetails = (pics: any) => {
        if (pics === undefined) {
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "lenses");
            data.append("cloud_name", "dgplpt5xt");
            fetch("https://api.cloudinary.com/v1_1/dgplpt5xt/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    toast('Image uploaded', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return;
        }
    };

    return (
        <Box mx="auto" w={"400px"} className='border-2 p-2'>
            <form onSubmit={form.onSubmit(handleForm)}>
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="John Doe"
                    {...form.getInputProps('name')}
                />
                <div className='flex gap-2 items-center w-full'>
                    <FileInput
                        withAsterisk
                        label="upload Image"
                        className='w-full'
                        placeholder="click to upload"
                        onChange={postDetails}
                        rightSection={icon}
                    />

                </div>
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Add User</Button>
                </Group>
            </form>
        </Box>
    );
}