import Layout from "@/components/layout";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="Blog" seoTitle="Blog">
      <h1 className="font-semibold text-lg mb-10">Latest Posts:</h1>
      <ul>
        {posts.map((post, index) => (
          <div key={index} className="mb-5">
            <Link href={`/blog/${post.slug}`}>
              <span className="text-lg text-red-500">{post.title}</span>
              <div>
                <span>
                  {post.date} / {post.category}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const blogPosts = readdirSync(postsDirectory).map((file) => {
    const content = readFileSync(`src/posts/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });
  return {
    props: {
      posts: blogPosts,
    },
  };
}

export default Blog;
