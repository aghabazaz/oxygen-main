"use client";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (nodeRef && nodeRef.current) {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = value.toFixed();
        },
      });

      return () => controls.stop();
    }
  }, [from, to]);

  return <p ref={nodeRef}>{from}</p>;
};

export default Counter;
