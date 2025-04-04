import React, { useRef, useState } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("black");
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎨 Simple Drawing App</h2>
      <canvas
        ref={canvasRef}
        width="500"
        height="300"
        style={{ border: "2px solid black", backgroundColor: "white" }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseOut={stopDrawing}
      />
      <br />
      <button onClick={() => setColor("black")}>🖤 Black</button>
      <button onClick={() => setColor("red")}>❤️ Red</button>
      <button onClick={() => setColor("blue")}>💙 Blue</button>
      <button onClick={clearCanvas}>🗑️ Clear</button>
    </div>
  );
};

export default DrawingCanvas;
