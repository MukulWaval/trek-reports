import React, { useRef, useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const CarouselItem: React.FC<ImageProps> = ({ src, alt }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null); // Ref for the modal
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the image

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const showModal = () => {
    if (!isMobile && dialogRef.current) {
      dialogRef.current.showModal(); // Open the modal
    }

    imageRef.current?.scrollIntoView({
      behavior: "instant",
      block: "center"
    });
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the modal
    }

    // Scroll the image back into view after closing the modal
    imageRef.current?.scrollIntoView({
      behavior: "instant",
      block: "center"
    });
  };

  return (
    <>
      {/* Image Grid Item */}
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="rounded-box absolute inset-0 w-full h-full object-cover cursor-pointer"
          onClick={showModal}
        />
      </div>

      {/* Modal */}
      <dialog
        ref={dialogRef}
        id={src}
        className="modal"
        onClose={closeModal} // Ensure scroll happens when modal closes
      >
        <div className="modal-box">
          <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default CarouselItem;
