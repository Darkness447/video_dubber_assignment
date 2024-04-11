'use server'

import { revalidateTag } from "next/cache";
import { FormValues } from "../components/CreateNewUser";

export async function postData(data: FormValues) {

    data.createdAt = new Date()

    const response = await fetch("https://640f839c4ed25579dc50e8b3.mockapi.io/CRUd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const responseData = await response.json();
        console.log("Data posted successfully:", responseData);
    } else {
        console.error("Failed to post data:", response.statusText);
    }
    revalidateTag('collection')
}