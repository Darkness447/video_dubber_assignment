"use client"
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';


export function CreateNewUser() {

    const [pic, setPic] = useState()


    const form = useForm({
        initialValues: {
            email: '',
            name: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleForm = (formData: any) => {
        console.log(formData)
    }

    const postDetails = (pics: any) => {
        if (pics === undefined) {
            return;
        }
        console.log(pics);
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
                    console.log(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return;
        }
    };

    return (
        <Box maw={340} mx="auto">
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
                
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}