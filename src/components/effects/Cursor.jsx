import { useEffect, useState } from "react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => setEnabled(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = document.createElement("div");

    cursor.className = "terminal-cursor";
    cursor.innerHTML = '<span class="terminal-cursor-symbol">▌</span>';

    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const target = e.target.closest(
        "a, button, .project-card, .project-item, [role='button']",
      );

      cursor.classList.toggle("cursor-hover", Boolean(target));
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, [enabled]);

  return null;
}
