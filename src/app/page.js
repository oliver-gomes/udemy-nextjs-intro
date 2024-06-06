"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  console.log(router);

  const handleNavigation = () => {
    router.push("/posts");
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Modern NextJS Homepage</h1>
      <Link href={"/profile"}>Link to profile</Link>
      <Link href={"/profile/setting"}>Link to profile setting</Link>
      <br />
      <button onClick={handleNavigation}>
        Link to Posts using useRouter hooks
      </button>
    </main>
  );
}
