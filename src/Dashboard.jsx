import { useState } from "react";
import { db } from "./lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";

export default function Dashboard() {
  const [rawData, setRawData] = useState("");

  const handleSend = async () => {
    if (rawData === "") {
      alert("Датагаа оруулна уу!");
      return;
    }

    try {
      await addDoc(collection(db, "user_data"), {
        text: rawData,
        sentAt: new Date(),
      });

      alert("Амжилттай илгээгдлээ!");
      setRawData("");
    } catch (error) {
      console.error("Алдаа гарлаа: ", error);
      alert("Алдаа гарлаа.");
    }
  };

  return (
    <div
      className="App"
      style={{ position: "relative", width: "100%", minHeight: "calc(100vh - 60px)" }}
    >
      <div className="hero">
        <div className="overlay">
          <div className="content">
            <h1 className="main-title">
              HI <br /> ANGEL <br /> .
            </h1>
            <p className="description">
              Өчигдөр жаахан таагүй зүйл боллоо. Өнөөдөр орой завтай бол хоёулаа
              Үндэсний цэцэрлэгт хүрээлэн орох уу?
            </p>

            <div className="input-group">
              <input
                type="text"
                placeholder="Түүнд хариулт өгөх хэсэг..."
                className="custom-input"
                value={rawData}
                onChange={(e) => setRawData(e.target.value)}
              />
              <button className="send-button" onClick={handleSend}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
