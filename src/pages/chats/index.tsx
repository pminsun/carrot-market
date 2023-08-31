import Layout from "@/components/layout";
import UserShortProfile from "@/components/userShortProfile";
import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-10 divide-y-[1px] ">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex px-4 cursor-pointer py-3 items-center space-x-3"
          >
            <UserShortProfile
              detailText="See you tomorrow in the corner at 2pm!"
              detailTxtSizeBig
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
