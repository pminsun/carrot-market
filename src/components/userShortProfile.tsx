import useUser from "@libs/client/useUser";
import { cls } from "@libs/client/utils";

interface UserShortProfileProps {
  detailText: string;
  widthBig?: boolean;
  heightBig?: boolean;
  nameColorDark?: boolean;
  nameSizeBig?: boolean;
  detailTxtColorDark?: boolean;
  detailTxtSizeBig?: boolean;
}

export default function UserShortProfile({
  detailText,
  widthBig,
  heightBig,
  nameColorDark,
  nameSizeBig,
  detailTxtColorDark,
  detailTxtSizeBig,
}: UserShortProfileProps) {
  return (
    <>
      <div
        className={cls(
          widthBig ? "w-16" : "w-12",
          heightBig ? "h-16" : "h-12",
          "rounded-full bg-slate-300"
        )}
      />
      <div>
        <p
          className={cls(
            nameColorDark ? "text-gray-900 " : "text-gray-700",
            nameSizeBig ? "" : "text-sm",
            "font-medium"
          )}
        >
          Steve Jebs
        </p>
        <p
          className={cls(
            detailTxtColorDark ? "text-gray-700" : "text-gray-500",
            detailTxtSizeBig ? "text-sm" : "text-xs",
            "font-medium "
          )}
        >
          {detailText}
        </p>
      </div>
    </>
  );
}
