
import { useState } from "react";
import "./App.css";

function App() {
  const [ad, setAd] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [cins, setCins] = useState("");
  const [maraglar, setMaraglar] = useState([]);
  const [seher, setSeher] = useState("");
  const [qeyd, setQeyd] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleCheckbox(e) {
    const value = e.target.value;

    if (e.target.checked) {
      setMaraglar([...maraglar, value]);
    } else {
      setMaraglar(
        maraglar.filter((item) => item !== value)
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (ad.trim() === "") {
      newErrors.ad = "Ad daxil edin";
    }

    if (
      email.trim() === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Düzgün email daxil edin";
    }

    if (sifre.length < 6) {
      newErrors.sifre =
        "Şifrə ən azı 6 simvol olmalıdır";
    }

    if (cins === "") {
      newErrors.cins = "Cins seçin";
    }

    if (maraglar.length === 0) {
      newErrors.maraglar = "Ən azı bir seçim edin";
    }

    if (seher === "") {
      newErrors.seher = "Şəhər seçin";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Form uğurla göndərildi!");
    } else {
      setSuccess("");
    }
  }

  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="form">
        <h1>Qeydiyyat Formu</h1>

        <div className="field">
          <label htmlFor="ad">Ad</label>
          <input
            id="ad"
            type="text"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            placeholder="Adınızı daxil edin"
          />
          <p className="error">{errors.ad}</p>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
          <p className="error">{errors.email}</p>
        </div>

        <div className="field">
          <label htmlFor="sifre">Şifrə</label>
          <input
            id="sifre"
            type="password"
            value={sifre}
            onChange={(e) => setSifre(e.target.value)}
            placeholder="Ən azı 6 simvol"
          />
          <p className="error">{errors.sifre}</p>
        </div>

        <div className="field">
          <label>Cins</label>

          <div className="options">
            <label>
              <input
                type="radio"
                name="cins"
                value="Kişi"
                checked={cins === "Kişi"}
                onChange={(e) => setCins(e.target.value)}
              />
              Kişi
            </label>

            <label>
              <input
                type="radio"
                name="cins"
                value="Qadın"
                checked={cins === "Qadın"}
                onChange={(e) => setCins(e.target.value)}
              />
              Qadın
            </label>
          </div>

          <p className="error">{errors.cins}</p>
        </div>

        <div className="field">
          <label>Maraq dairələri</label>

          <div className="options">
            <label>
              <input
                type="checkbox"
                value="Proqramlaşdırma"
                checked={maraglar.includes("Proqramlaşdırma")}
                onChange={handleCheckbox}
              />
              Proqramlaşdırma
            </label>

            <label>
              <input
                type="checkbox"
                value="Dizayn"
                checked={maraglar.includes("Dizayn")}
                onChange={handleCheckbox}
              />
              Dizayn
            </label>

            <label>
              <input
                type="checkbox"
                value="İdman"
                checked={maraglar.includes("İdman")}
                onChange={handleCheckbox}
              />
              İdman
            </label>
          </div>

          <p className="error">{errors.maraglar}</p>
        </div>

        <div className="field">
          <label htmlFor="seher">Şəhər</label>

          <select
            id="seher"
            value={seher}
            onChange={(e) => setSeher(e.target.value)}
          >
            <option value="">Şəhər seçin</option>
            <option value="Bakı">Bakı</option>
            <option value="Gəncə">Gəncə</option>
            <option value="Sumqayıt">Sumqayıt</option>
            <option value="Şəki">Şəki</option>
          </select>

          <p className="error">{errors.seher}</p>
        </div>

        <div className="field">
          <label htmlFor="qeyd">Qeyd</label>
          <textarea
            id="qeyd"
            rows="4"
            value={qeyd}
            onChange={(e) => setQeyd(e.target.value)}
            placeholder="Əlavə qeyd yazın"
          />
        </div>

        <button type="submit">Göndər</button>

        {success && (
          <p className="success">{success}</p>
        )}
      </form>
    </div>
  );
}

export default App;
