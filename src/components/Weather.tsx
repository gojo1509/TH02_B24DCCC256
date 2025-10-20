import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);

  const getWeather = async () => {
    if (!city.trim()) return;
    try {
      // Gọi API dạng JSON để tách được dữ liệu rõ hơn
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      const data = res.data;
      setTemp(data.current_condition[0].temp_C + "°C");
      setDesc(data.current_condition[0].weatherDesc[0].value);
    } catch (err) {
      setTemp(null);
      setDesc("Không lấy được dữ liệu");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          maxWidth: 900,
          borderRadius: 8,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "30px 40px",
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 20 }}>
          Thời tiết
        </h2>

        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <input
            type="text"
            placeholder="Nhập tên thành phố..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 15,
            }}
          />
          <button
            onClick={getWeather}
            style={{
              marginLeft: 10,
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Xem
          </button>
        </div>

        {(temp || desc) && (
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px 20px",
              borderRadius: 6,
              fontSize: 16,
            }}
          >
            {temp && (
              <p style={{ margin: 0 }}>
                <strong>Nhiệt độ:</strong> {temp}
              </p>
            )}
            {desc && (
              <p style={{ margin: "5px 0 0 0" }}>
                <strong>{desc}</strong>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
