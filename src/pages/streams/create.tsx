import CommonBtn from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import useMutation from "@libs/client/useMutation";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<CreateForm>();
  const [createStream, { loading, data }] =
    useMutation<CreateResponse>(`/api/streams`);
  const onValid = (form: CreateForm) => {
    if (loading) return;
    createStream(form);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout title="Go Live" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className=" space-y-5 py-10 px-4">
        <Input
          register={register("name", { required: true })}
          label={"Name"}
          name={"text"}
          kind={"text"}
        />
        <Input
          register={register("price", { required: true, valueAsNumber: true })}
          label={"Price"}
          name={"price"}
          kind={"price"}
        />
        <div>
          <TextArea
            register={register("description", { required: true })}
            label="Description"
            idText="description"
          />
        </div>

        <CommonBtn btntext={loading ? "Loading..." : "Go live"} />
      </form>
    </Layout>
  );
};

export default Create;
