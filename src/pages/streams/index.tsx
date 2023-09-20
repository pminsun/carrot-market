import FloatingBtn from "@/components/floating-button";
import Layout from "@/components/layout";
import { Stream } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Streams: NextPage = () => {
  const { data } = useSWR<StreamsResponse>("/api/streams");
  return (
    <Layout title="라이브" hasTabBar>
      <div className="py-10 divide-y-2 space-y-4">
        {data?.streams.map((stream) => (
          <Link
            key={stream.id}
            href={`/streams/${stream.id}`}
            className="pt-4 px-4"
          >
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-gray-700 text-lg mt-2">{stream.name}</h3>
          </Link>
        ))}
        <FloatingBtn url="/streams/create" />
      </div>
    </Layout>
  );
};

export default Streams;
