import React, { useState, useEffect } from "react";
import "./styles.css";

function ToastMessage({ message }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  return (
    show && (
      <div
        id="toast"
        className={`toastMessage ${show ? "visible" : "hidden"}`}
      >
        <span className="toastContent">{message}</span>
      </div>
    )
  );
}

export default ToastMessage;
