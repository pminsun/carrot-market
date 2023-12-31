import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";

interface commonBtnProps {
  btntext: string;
}

export default function CommonBtn({ btntext }: commonBtnProps) {
  const router = useRouter();
  const addClassName =
    router.pathname.startsWith("/products/") &&
    !router.pathname.includes("/products/upload")
      ? "flex-1 py-3"
      : router.pathname === "/enter"
      ? "mt-5 py-2 px-4 border border-transparent  shadow-sm text-sm"
      : "mt-2 w-full py-2 px-4 border border-transparent shadow-sm text-sm";

  return (
    <button
      className={cls(
        addClassName,
        "bg-orange-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium hover:bg-orange-600 focus:ring-orange-500"
      )}
    >
      {btntext}
    </button>
  );
}
