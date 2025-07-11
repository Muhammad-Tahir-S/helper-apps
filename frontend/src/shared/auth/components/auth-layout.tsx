import { Outlet } from "react-router";

import AuthImage from "@/shared/assets/images/authLayout.jpg";

export default function AuthLayout() {
  return (
    <div className="bg-base-dark h-[100dvh] w-[100dvw] flex">
      <div className="w-[50%] hidden lg:flex py-[40px] pl-[40px]">
        <img src={AuthImage} alt="Auth" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
