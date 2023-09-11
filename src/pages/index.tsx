import FloatingBtn from "@/components/floating-button";
import Item from "@/components/item";
import Layout from "@/components/layout";
import useUser from "@libs/client/useUser";
import { Product } from "@prisma/client";
import Head from "next/head";
import useSWR from "node_modules/swr/core/dist";

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

export default function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");
  return (
    <Layout title="홈" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 py-10 divide-y">
        {data?.products.map((product) => (
          <Item
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            comments={1}
            hearts={1}
          />
        ))}
        <FloatingBtn url="/products/upload" />
      </div>
    </Layout>
  );
}
