"use client"
import { UserTable } from "../components/UserTable";
import { getUserData } from "../data/queries";

export default async function Home() {

    const data = await getUserData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UserTable data={data} />
        </main>
    );
}
