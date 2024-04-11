import { IDataProps, UserTable } from "../components/UserTable";
import { CreateNewUser } from "../components/CreateNewUser";

export default function Home({ data }: { data: IDataProps[] }) {

    return (
        <main className="flex flex-col items-center p-10 gap-5">
            <UserTable data={data} />
            <CreateNewUser />
            <p>API : https://640f839c4ed25579dc50e8b3.mockapi.io/CRUd</p>
        </main>
    );
}
