import { useRef } from "react";

const Overlay = ({
  showOverlay,
  onClose,
  children,
}: {
  showOverlay: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return (
    <>
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            ref={overlayRef}
            className="bg-white p-6 rounded-lg shadow-2xl max-w-[640px] max-h-[415px] w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
