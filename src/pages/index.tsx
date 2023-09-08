import FloatingBtn from "@/components/floating-button";
import Item from "@/components/item";
import Layout from "@/components/layout";
import useUser from "@libs/client/useUser";
import Head from "next/head";

export default function Home() {
  const { user, isLoading } = useUser();
  console.log("user >>>", user);

  return (
    <Layout title="홈" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 py-10 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title={"New iPhone 14"}
            price={95}
            comments={1}
            hearts={1}
          />
        ))}
        <FloatingBtn url="/items/upload" />
      </div>
    </Layout>
  );
}
