import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center dark:bg-black dark:text-white h-screen">
      <SignUp />
    </div>
  );
}
