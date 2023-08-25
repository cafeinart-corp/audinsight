import { useMemo } from "react";

const Size56px = ({
  size56pxWidth,
  size56pxPosition,
  size56pxAlignSelf,
  size56pxZIndex,
  spacerBackgroundColor,
  spacerHeight,
}) => {
  const size56pxStyle = useMemo(() => {
    return {
      width: size56pxWidth,
      position: size56pxPosition,
      alignSelf: size56pxAlignSelf,
      zIndex: size56pxZIndex,
    };
  }, [size56pxWidth, size56pxPosition, size56pxAlignSelf, size56pxZIndex]);

  const spacerStyle = useMemo(() => {
    return {
      backgroundColor: spacerBackgroundColor,
      height: spacerHeight,
    };
  }, [spacerBackgroundColor, spacerHeight]);

  return (
    <div
      className="w-full relative overflow-hidden flex flex-col items-start justify-start"
      style={size56pxStyle}
    >
      <div
        className="self-stretch relative bg-whitesmoke h-14 overflow-hidden shrink-0"
        style={spacerStyle}
      />
    </div>
  );
};

export default Size56px;
