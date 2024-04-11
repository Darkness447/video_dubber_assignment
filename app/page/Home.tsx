import { useEffect, useState } from "react";
import { IDataProps, UserTable } from "../components/UserTable";
import { getUserData } from "../data/queries";
import { CreateNewUser } from "../components/CreateNewUser";

export default function Home({ data }: { data: IDataProps[] }) {

    return (
        <main className="flex flex-col p-10">
            <UserTable data={data} />
            <CreateNewUser />
        </main>
    );
}
