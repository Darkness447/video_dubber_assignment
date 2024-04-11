"use client"
import { useEffect, useState } from "react";
import { UserTable } from "../components/UserTable";
import { getUserData } from "../data/queries";
import { CreateNewUser } from "../components/CreateNewUser";

export default function Home() {
    const [userData, setData] = useState([])

    useEffect(() => {

        async function fetchData() {
            const data = await getUserData();
            setData(data);
        }

        fetchData();
    }, [])

    return (
        <main className="flex flex-col p-10">
            <UserTable data={userData} />
            <CreateNewUser/>
        </main>
    );
}
