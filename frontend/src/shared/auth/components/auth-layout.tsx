import { Outlet } from "react-router";

import AuthImage from "@/shared/assets/images/authLayout.jpg";

export default function AuthLayout() {
  return (
    <div className="dark:bg-base-dark h-[100dvh] w-[100dvw] flex">
      <div className="w-[50%] hidden md:flex py-[40px] pl-[40px]">
        <img
          src={AuthImage}
          alt="Auth"
          className="rounded-[50px] object-cover w-full"
        />
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="flex flex-col gap-[48px] lg:w-[400px] w-full p-5 lg:p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
