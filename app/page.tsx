import { getUserData } from "./data/queries";
import Home from "./page/Home";


export default async function Page() {

  const data = await getUserData();
  const reverseData = data.reverse()


  return (
    <main className="flex min-h-screen justify-center">
      <Home data={reverseData} />
    </main>
  );
}
