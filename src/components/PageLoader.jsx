import { useEffect, useState } from "react";

const PageLoader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000); // Total loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "white",
        zIndex: 9999,
        transform: hide ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 1s ease-in-out",
        overflow: "hidden",
      }}
    >
      {/* Side Borders */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "4px",
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "4px",
          backgroundColor: "black",
        }}
      />
      {/* Bottom Border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "4px",
          width: "100%",
          backgroundColor: "black",
        }}
      />

      {/* Typing Text */}
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "1.8rem",
          color: "#111",
          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "2px solid #111",
          animation:
            "typing 1.2s steps(24, end) forwards, blink 0.6s step-end infinite",
          width: "20ch",
        }}
      >
        Keep Learning...
      </span>

      {/* Keyframes */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 16ch }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
        `}
      </style>
    </div>
  );
};

export default PageLoader;
