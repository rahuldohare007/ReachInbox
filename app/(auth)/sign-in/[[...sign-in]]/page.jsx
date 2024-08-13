import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center dark:bg-black dark:text-white h-screen">
      <SignIn />
    </div>
  );
}
