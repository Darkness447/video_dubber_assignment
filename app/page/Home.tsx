import { IDataProps, UserTable } from "../components/UserTable";
import { CreateNewUser } from "../components/CreateNewUser";

export default function Home({ data }: { data: IDataProps[] }) {

    return (
        <main className="flex flex-col p-10 gap-16">
            <UserTable data={data} />
            <CreateNewUser />
        </main>
    );
}
