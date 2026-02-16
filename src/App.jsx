import { useState } from "react";
import { db } from "./firebase-config"; // Чиний саяны үүсгэсэн тохиргооны файл
import { collection, addDoc } from "firebase/firestore";
import "./App.css";

function App() {
  // Хэрэглэгчийн бичиж байгаа датаг хадгалах "сав"
  const [rawData, setRawData] = useState("");

  // SEND товчлуур дээр дарахад ажиллах функц
  const handleSend = async () => {
    // Хэрэв юу ч бичээгүй байвал анхааруулга өгнө
    if (rawData === "") {
      alert("Датагаа оруулна уу!");
      return;
    }

    try {
      // Firebase-ийн Firestore руу "user_data" гэдэг цуглуулга руу датаг шиднэ
      await addDoc(collection(db, "user_data"), {
        text: rawData,
        sentAt: new Date(), // Илгээсэн цаг хугацааг хадгална
      });

      alert("Амжилттай илгээгдлээ! Firebase Console-оо шалгаарай.");
      setRawData(""); // Илгээсний дараа бичих талбарыг хоосон болгоно
    } catch (error) {
      console.error("Алдаа гарлаа: ", error);
      alert("Алдаа гарлаа. Firestore-ийн Rules хэсгийг шалгаарай!");
    }
  };

  return (
    <div className="hero">
      <div className="overlay">
        <div className="content">
          <h1 className="main-title">
            THE <br /> DATE <br /> EDITION
          </h1>
          <p className="description">Таныг болзоонд урьж байна</p>

          <div className="input-group">
            {/* Энд хэрэглэгч датагаа бичнэ */}
            <input
              type="text"
              placeholder="Raw data оруулна уу..."
              className="custom-input"
              value={rawData}
              onChange={(e) => setRawData(e.target.value)}
            />
            {/* Энэ товчлуур дээр дарахад handleSend функц ажиллана */}
            <button className="send-button" onClick={handleSend}>
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
