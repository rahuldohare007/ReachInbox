import { UserButton } from "@clerk/nextjs";
import {
  House,
  UserRoundSearch,
  Mail,
  Send,
  Layers,
  Inbox,
  ChartBar,
} from "lucide-react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: <House size={24} />,
    },
    {
      id: 2,
      name: "User",
      icon: <UserRoundSearch size={24} />,
    },
    {
      id: 3,
      name: "Mail",
      icon: <Mail size={24} />,
    },
    {
      id: 4,
      name: "Send",
      icon: <Send size={24} />,
    },
    {
      id: 5,
      name: "Categories",
      icon: <Layers size={24} />,
    },
    {
      id: 6,
      name: "Inbox",
      icon: <Inbox size={24} />,
    },
    {
      id: 7,
      name: "Bar",
      icon: <ChartBar size={24} />,
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-between p-5 border-r-2 dark:bg-headerColor dark:text-white ">
      <div className="flex flex-col items-center">
        <div className="dark:bg-white bg-black text-white font-bold p-0.5 px-2 rounded-md dark:text-black text-2xl">
          M
        </div>
        <div className="mt-5 flex flex-col items-center gap-4">
          {menuList.map((menu) => (
            <div
              key={menu.id}
              className="flex gap-2 items-center p-2 text-md rounded-md cursor-pointer hover:bg-slate-200 hover:dark:text-black"
            >
              {menu.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center fixed bottom-4 mb-3">
        <UserButton />
      </div>
    </div>
  );
}

export default SideNav;
