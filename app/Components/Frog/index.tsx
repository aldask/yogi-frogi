"use client";
import React, { useEffect } from "react";
import "./frog_style.css";

interface WindowDimensions {
  height: number;
  width: number;
}

interface Position {
  left: number;
  top: number;
}

interface Scale {
  x: string;
  y: string;
}

interface PositionFromCenter {
  x: number;
  y: number;
}

const Frog: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;

    const setCustomProps = (e: MouseEvent | TouchEvent) => {
      const w: WindowDimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
      };

      const clientX =
        "touches" in e
          ? (e.touches[0] as Touch).clientX
          : (e as MouseEvent).clientX;
      const clientY =
        "touches" in e
          ? (e.touches[0] as Touch).clientY
          : (e as MouseEvent).clientY;

      const pos: Position = {
        left: clientX / w.width,
        top: clientY / w.height,
      };

      const scale: Scale = {
        x: `${1 - Math.abs(w.width / 2 - clientX) / w.width}`,
        y: `${1 - Math.abs(w.height / 2 - clientY) / w.height}`,
      };

      const posFromCenter: PositionFromCenter = {
        x: (w.width / 2 - clientX) / (w.width / 2),
        y: (w.height / 2 - clientY) / (w.height / 2),
      };

      root.style.setProperty("--pos-x", String(pos.left));
      root.style.setProperty("--pos-y", String(pos.top));
      root.style.setProperty("--pos-x-from-center", String(posFromCenter.x));
      root.style.setProperty("--pos-y-from-center", String(posFromCenter.y));
      root.style.setProperty("--scale-x", scale.x);
    };

    const handleResize = () => {
      const w: WindowDimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", setCustomProps, false);
    window.addEventListener("touchstart", (e) => setCustomProps(e), false);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", setCustomProps, false);
      window.removeEventListener("touchstart", (e) => setCustomProps(e), false);
    };
  }, []);

  return (
    <div className="frog">
      <div className="body"></div>
      <div className="arm left">
        <div className="hand">
          <div className="finger"></div>
          <div className="finger"></div>
          <div className="finger"></div>
        </div>
      </div>
      <div className="arm right">
        <div className="hand">
          <div className="finger"></div>
          <div className="finger"></div>
          <div className="finger"></div>
        </div>
      </div>
      <div className="leg left">
        <div className="foot"></div>
      </div>
      <div className="leg right">
        <div className="foot"></div>
      </div>
      <div className="head">
        <div className="eyes">
          <div className="eye left">
            <div className="eyeball">
              <div className="pupil"></div>
            </div>
            <div className="eyelid"></div>
          </div>
          <div className="eye right">
            <div className="eyeball">
              <div className="pupil"></div>
            </div>
            <div className="eyelid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frog;
