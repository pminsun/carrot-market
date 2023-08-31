import FloatingBtn from "@/components/floating-button";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const Streams: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="py-10 divide-y-2 space-y-4">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="pt-4 px-4">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <FloatingBtn url="/streams/create" />
      </div>
    </Layout>
  );
};

export default Streams;
