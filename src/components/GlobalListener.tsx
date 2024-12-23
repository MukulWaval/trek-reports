import { useEffect } from "react";

const GlobalListener: React.FC = () => {
  useEffect(() => {
    // Prevent copy action
    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault();
      navigator.clipboard.writeText("");
    };

    // Prevent right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    // Prevent text selection
    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault();
    };

    // Prevent zoom (Ctrl + Mouse Wheel)
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    // Prevent zoom (Ctrl + "+", Ctrl + "-", Ctrl + "0")
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        (event.key === "+" || event.key === "-" || event.key === "0")
      ) {
        event.preventDefault();
      }
    };

    // Attach global event listeners
    document.addEventListener("copy", handleCopy);
    document.addEventListener("contextmenu", handleContextMenu);
    //document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Clean up listeners on component unmount
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default GlobalListener;
