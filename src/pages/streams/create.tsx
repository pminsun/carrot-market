import CommonBtn from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=" space-y-5 py-10 px-4">
        <Input label={"Name"} name={"email"} kind={"text"} />
        <Input label={"Price"} name={"price"} kind={"price"} />
        <div>
          <TextArea label="Description" idText="description" />
        </div>

        <CommonBtn btntext="Go live" />
      </div>
    </Layout>
  );
};

export default Create;
