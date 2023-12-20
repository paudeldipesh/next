import Link from "next/link";
import ProductCard from "./components/ProductCard";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  return (
    <main>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href="/user">Go To User Page</Link>
      <ProductCard />
      <hr />
      <table className="text-center table table-bordered">
        <thead className="text-red-600 text-lg">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
