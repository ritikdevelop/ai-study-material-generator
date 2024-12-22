import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    </div>
  );
}
