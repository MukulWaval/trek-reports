import React, { useRef, useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const CarouselItem: React.FC<ImageProps> = ({ src, alt }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null); // Ref to the image element

  useEffect(() => {
    // Set up the mobile detection based on window width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile
    };

    // Check on initial load
    checkMobile();

    // Attach event listener to detect window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const showModal = () => {
    // Only show the modal if it's not a mobile device
    if (!isMobile) {
      document.getElementById(`modal-${src}`)?.showModal();
    }
  };

  const closeModal = () => {
    // Close the modal
    document.getElementById(`modal-${src}`)?.close();

    // Scroll the image into view after closing the modal
    imageRef.current?.scrollIntoView({
      behavior: "smooth", // Smooth scroll
      block: "center" // Align the image to the center of the screen
    });
  };

  return (
    <>
      {/* Image Grid Item */}
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <img
          ref={imageRef} // Attach the ref to the image
          src={src}
          alt={alt}
          className="rounded-box absolute inset-0 w-full h-full object-cover cursor-pointer"
          onClick={showModal}
        />
      </div>

      {/* Modal */}
      <dialog id={`modal-${src}`} className="modal">
        <div className="modal-box w-full h-auto">
          <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default CarouselItem;
