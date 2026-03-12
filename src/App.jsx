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
    setShowMain(true);
    // Дууг тоглуулах (public фолдерт music.mp3 нэртэй файл байна гэж үзлээ)
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio
      .play()
      .catch((err) =>
        console.log(
          "Дуу тоглуулахад алдаа гарлаа. Файлын нэрээ шалгаарай:",
          err,
        ),
      );
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
    <div className="App">
      {/* 1. Хэрэв showMain false бол WelcomeScreen-г харуулна */}
      {!showMain ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        /* 2. showMain true болсон үед чиний үндсэн код ажиллана */
        <div className="hero animate-fade-in">
          <div className="overlay">
            <div className="content">
              <h1 className="main-title">
                HELLO <br /> BBYGIRL <br /> .
              </h1>
              <p className="description">Таныг болзоонд урьж байна</p>

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
      )}
    </div>
  );
}

export default App;
