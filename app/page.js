import { UserButton } from "@clerk/nextjs";
import react from "react";

export default function Home() {
  return (
    <div>
      <h2>Hello, world!</h2>
      <button>Click me</button>
      <UserButton />
    </div>
  );
}
