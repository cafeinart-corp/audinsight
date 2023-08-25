import { useMemo } from "react";

const ShapePillSizeMediumHiera = ({
  iconsFavorite,
  label = "Label",
  iconsFavorite1,
  iconLeading = true,
  iconTrailing = true,
  shapePillSizeMediumHieraPosition,
  shapePillSizeMediumHieraPadding,
  shapePillSizeMediumHieraBoxSizing,
  frameDivBackgroundColor,
  frameDivPadding,
  iconsFavoriteWidth,
  iconsFavoriteHeight,
  labelColor,
  iconsFavoriteWidth1,
  iconsFavoriteHeight1,
}) => {
  const shapePillSizeMediumHieraStyle = useMemo(() => {
    return {
      position: shapePillSizeMediumHieraPosition,
      padding: shapePillSizeMediumHieraPadding,
      boxSizing: shapePillSizeMediumHieraBoxSizing,
    };
  }, [
    shapePillSizeMediumHieraPosition,
    shapePillSizeMediumHieraPadding,
    shapePillSizeMediumHieraBoxSizing,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      padding: frameDivPadding,
    };
  }, [frameDivBackgroundColor, frameDivPadding]);

  const iconsFavoriteStyle = useMemo(() => {
    return {
      width: iconsFavoriteWidth,
      height: iconsFavoriteHeight,
    };
  }, [iconsFavoriteWidth, iconsFavoriteHeight]);

  const label1Style = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  const iconsFavorite1Style = useMemo(() => {
    return {
      width: iconsFavoriteWidth1,
      height: iconsFavoriteHeight1,
    };
  }, [iconsFavoriteWidth1, iconsFavoriteHeight1]);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center text-base text-black font-typography-heading-large"
      style={shapePillSizeMediumHieraStyle}
    >
      <div
        className="rounded-980xl bg-gainsboro-100 flex flex-col py-3.5 px-0 items-center justify-center"
        style={frameDivStyle}
      >
        <div className="overflow-hidden flex flex-row py-0 px-4 items-center justify-center gap-[8px]">
          {iconLeading && (
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src={iconsFavorite}
              style={iconsFavoriteStyle}
            />
          )}
          <div
            className="relative leading-[20px] font-medium"
            style={label1Style}
          >
            {label}
          </div>
          {iconTrailing && (
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src={iconsFavorite1}
              style={iconsFavorite1Style}
            />
          )}
        </div>
        <div className="relative w-[60px] h-0" />
      </div>
    </div>
  );
};

export default ShapePillSizeMediumHiera;
