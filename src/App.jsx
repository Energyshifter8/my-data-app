import { useState } from "react";
import { db } from "./firebase-config"; // Чиний саяны үүсгэсэн тохиргооны файл
import { collection, addDoc } from "firebase/firestore";
import "./App.css";
import WelcomeScreen from "./WelcomeScreen";

function App() {
  // Хэрэглэгчийн бичиж байгаа датаг хадгалах "сав"
  const [rawData, setRawData] = useState("");
  const [showMain, setShowMain] = useState(false);
  const audioRef = React.useRef(null); // Дууны удирдлага

  // SEND товчлуур дээр дарахад ажиллах функц
  const handleSend = async () => {
    // Хэрэв юу ч бичээгүй байвал анхааруулга өгнө
    if (rawData === "") {
      alert("Датагаа оруулна уу!");
      return;
    }
    const handleStart = () => {
      setShowMain(true);
      const audio = new Audio("/music.mp3"); // public доторх дууны зам
      audio.loop = true;
      audio.play();
    };

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
    <div className="App">
      {!showMain ? (
        /* Хэрэв эхлээгүй байвал Pop-up харагдана */
        <WelcomeScreen onStart={handleStart} />
      ) : (
        /* Эхэлсэн үед чиний SS дээрх үндсэн код харагдана */
        <div className="hero">
          <div className="overlay">
            <div className="content">
              <h1 className="main-title">
                HELLO <br /> SWEET <br />
              </h1>
              <p className="description">Таныг хоолонд урьж байна</p>

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
