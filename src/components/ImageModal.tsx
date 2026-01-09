import { memo, useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = memo(({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors rounded-full bg-white/10 hover:bg-white/20"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-[90vw] max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
});

ImageModal.displayName = "ImageModal";

export default ImageModal;
