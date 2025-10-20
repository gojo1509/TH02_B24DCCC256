import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
};

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  if (!user)
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <p>Đang tải dữ liệu...</p>
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 60,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 8,
          width: "80%",
          maxWidth: 800,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Chi tiết sinh viên</h2>
        <p>
          <strong>Tên:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Điện thoại:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <Link to="/users" style={{ color: "#6c63ff", textDecoration: "none" }}>
          ← Quay lại danh sách
        </Link>
      </div>
    </div>
  );
}

export default UserDetail;
