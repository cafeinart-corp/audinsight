import { useMemo } from "react";

const ClassCell = ({
  classCellPosition,
  classCellWidth,
  classCellAlignSelf,
}) => {
  const classCellStyle = useMemo(() => {
    return {
      position: classCellPosition,
      width: classCellWidth,
      alignSelf: classCellAlignSelf,
    };
  }, [classCellPosition, classCellWidth, classCellAlignSelf]);

  return (
    <div
      className="relative w-[375px] flex flex-col items-start justify-start"
      style={classCellStyle}
    >
      <div className="self-stretch relative bg-gainsboro-200 h-px" />
    </div>
  );
};

export default ClassCell;
