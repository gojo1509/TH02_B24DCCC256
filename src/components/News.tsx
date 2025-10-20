import { useEffect, useState } from "react";
import axios from "axios";

type Article = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  url: string;
  publishedAt: string;
};

function News() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results));
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "20px 30px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#222" }}>Tin tức</h2>

        {articles.map((article) => (
          <div
            key={article.id}
            style={{
              marginBottom: "30px",
              paddingBottom: "20px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "8px",
                display: "block",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}
            >
              {article.title}
            </h3>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              {article.summary.length > 200
                ? article.summary.slice(0, 200) + "..."
                : article.summary}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Đọc thêm tại SpacePolicyOnline.com
            </a>
            <p style={{ marginTop: "8px", color: "#777", fontSize: "14px" }}>
              Ngày đăng:{" "}
              {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
