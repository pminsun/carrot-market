import CommonBtn from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import useCoords from "@libs/client/useCoords";
import useMutation from "@libs/client/useMutation";
import { Post } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
  const onVaild = (data: WriteForm) => {
    if (loading) return;
    post({ ...data, latitude, longitude });
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack>
      <form className="px-4 py-10" onSubmit={handleSubmit(onVaild)}>
        <TextArea
          register={register("question", { required: true, minLength: 5 })}
          placeholderText="Ask a question!"
        />
        <CommonBtn btntext={loading ? "Loading..." : "Submit"} />
      </form>
    </Layout>
  );
};

export default Write;
