import FloatingBtn from "@/components/floating-button";
import Item from "@/components/item";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout title="홈" hasTabBar>
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
