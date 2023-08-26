import { useMemo, useState } from "react";
import ModalComponent from "./ModalComponent";

const ShapePillSizeXSmallHiera = ({
  iconsFavorite,
  label = "Label",
  iconsFavorite1,
  iconLeading = true,
  iconTrailing = true,
  shapePillSizeXSmallHieraPosition,
  labelColor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDivClick = () => {
    openModal();
    console.log("handleDivClick");
    <ModalComponent isOpen={isModalOpen} onClose={closeModal} />;
  };

  const shapePillSizeXSmallHieraStyle = useMemo(() => {
    return {
      position: shapePillSizeXSmallHieraPosition,
    };
  }, [shapePillSizeXSmallHieraPosition]);

  const labelStyle = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div
      className="relative rounded-9xl bg-gainsboro-100 flex flex-col py-1.5 px-0 items-center justify-center text-center text-xs text-black font-typography-heading-large"
      style={shapePillSizeXSmallHieraStyle}
      onClick={handleDivClick}
    >
      <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
        {iconLeading && (
          <img
            className="relative w-3 h-3 overflow-hidden shrink-0"
            alt=""
            src={iconsFavorite}
          />
        )}
        <div className="relative leading-[16px] font-medium" style={labelStyle}>
          {label}
        </div>
        {iconTrailing && (
          <img
            className="relative w-3 h-3 overflow-hidden shrink-0"
            alt=""
            src={iconsFavorite1}
          />
        )}
      </div>
      <div className="relative w-[52px] h-0" />
    </div>
  );
};

export default ShapePillSizeXSmallHiera;
