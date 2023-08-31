import CommonBtn from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-10">
        <TextArea placeholderText="Ask a question!" />
        <CommonBtn btntext="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
