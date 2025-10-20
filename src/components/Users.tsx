import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route, useParams } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
};

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 8,
          width: "80%",
          maxWidth: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Danh sách sinh viên</h2>
        <ul style={{ lineHeight: "1.8" }}>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`} style={{ color: "#0056b3" }}>
                {user.name}
              </Link>{" "}
              - {user.email}
            </li>
          ))}
        </ul>

        {/* Route con để hiển thị chi tiết */}
        <Routes>
          <Route path=":id" element={<UserDetail />} />
        </Routes>
      </div>
    </div>
  );
}

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
      <p style={{ marginTop: 20, fontStyle: "italic" }}>Đang tải dữ liệu...</p>
    );

  return (
    <div style={{ marginTop: 30 }}>
      <h3>Chi tiết sinh viên</h3>
      <p>Tên: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Điện thoại: {user.phone}</p>
      <p>Website: {user.website}</p>
      <Link to=".." style={{ color: "#6c63ff", textDecoration: "none" }}>
        ← Quay lại danh sách
      </Link>
    </div>
  );
}

export default Users;
