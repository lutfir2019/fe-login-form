import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const user = await getServerSession(authOptions);
  const url = user ? "/api/auth/signout" : "/auth";

  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full items-center gap-3">
        <h1>User Login</h1>
        <div className="flex w-full justify-center">
          <textarea
            name=""
            id=""
            rows={10}
            className="flex bg-slate-600 w-1/2 rounded-md bg-opacity-50 p-3"
            defaultValue={JSON.stringify(user?.user) ?? "No login user"}
          ></textarea>
        </div>

        <Link href={url}>
          <Button type="button">
            {user ? "Sign Out" : "Login Form"}
          </Button>
        </Link>
      </div>
    </main>
  );
}
