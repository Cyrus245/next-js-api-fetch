import Link from "next/link";
import articleStyle from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyle.card}
    >
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
