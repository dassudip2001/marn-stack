import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const initialValue = useRef();

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (symbol) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, symbol, setPassword]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number, symbol, passwordgenerator]);

  // const copyPassword = () =>
  //   useCallback(() => {
  //     window.navigator.clipboard.writeText(password);
  //   }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg text-rose-300 text-black">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          ref={initialValue}
        />
      </div>

      <button></button>

      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg text-rose-300 text-white">
        <label className="flex items-center justify-between py-1 px-3">
          <span>Length</span>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full corser-pointer"
          />
          <span>{length}</span>
        </label>
      </div>

      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg text-rose-300 text-white">
        <label className="flex items-center justify-between py-1 px-3">
          <span>Include Number</span>
          <input
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
        </label>
      </div>

      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg text-rose-300 text-white">
        <label className="flex items-center justify-between py-1 px-3">
          <span>Include Symbol</span>
          <input
            type="checkbox"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
        </label>
      </div>
    </>
  );
}

export default App;
