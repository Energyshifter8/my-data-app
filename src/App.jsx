import { useState, useRef } from "react"; // useRef нэмсэн
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";
import WelcomeScreen from "./WelcomeScreen"; // Шинэ файлаа дуудсан

function App() {
  const [rawData, setRawData] = useState("");
  const [showMain, setShowMain] = useState(false); // Pop-up харуулах төлөв
  const audioRef = useRef(null); // Дууг удирдах ref

  // ENTER дарахад ажиллах функц
  const handleStart = () => {
    setShowMain(true); // Үндсэн хуудсыг харуулна

    // Дуу тоглуулах хэсэг
    const audio = new Audio("/Girls.mp3"); // Файлын нэр яг ижил байх ёстой
    audio.loop = true; // Дууг тасралтгүй явуулна
    audio.play().catch((e) => console.error("Дууны алдаа:", e));
  };

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
      style={{ position: "relative", width: "100%", minHeight: "100vh" }}
    >
      {/* 1. Үндсэн цэцэгтэй хуудас (Энэ үргэлж ард нь байж байна) */}
      <div className="hero">
        <div className="overlay">
          <div className="content">
            <h1 className="main-title">
              HELLO <br /> SWEET <br /> .
            </h1>
            <p className="description">
              Чиний хөөрхөн инээмсэглэлийг ахиж хармаар санагдлаа. Завтай өдөр
              байвал болзож болох болов уу
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

      {/* 2. Welcome Screen (Зөвхөн эхлээгүй үед дээр нь Blur болж харагдана) */}
      {!showMain && <WelcomeScreen onStart={handleStart} />}
    </div>
  );
}

export default App;
