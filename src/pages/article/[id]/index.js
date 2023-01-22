import Axios from "Axios";
import Link from "next/link";
import postStyle from "../../../styles/Post.module.css";

const Article = ({ articles }) => {
  return (
    <>
      <h1 className={postStyle.h1}>{articles.title} </h1>
      <p className={postStyle.p}>{articles.body}</p>
      <Link href="/" className={postStyle.link}>
        Go back
      </Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  let articles = res.data;
  console.log(articles);
  return {
    props: {
      articles,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Article;
