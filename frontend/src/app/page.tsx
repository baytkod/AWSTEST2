import Image from "next/image";

async function getData() {
    const response = await fetch("http://backend:3001/users/", {
        cache: "no-cache",
    });
    const data = await response.json();
    return data;
}

export default async function Home() {
    const data = await getData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Frontend doğru çalışıyor! test33
            <strong>naber? </strong>
            <ul>
                {data &&
                    data.map((user: any) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </main>
    );
}
