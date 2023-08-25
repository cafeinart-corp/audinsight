import { useMemo } from "react";

const ClassHeadingSizeXSmall = ({
  wereTheLargestGalleryInTh,
  prop,
  prop1,
  spacer = true,
  classHeadingSizeXSmallPosition,
  classHeadingSizeXSmallAlignItems,
  classHeadingSizeXSmallAlignSelf,
  classHeadingSizeXSmallPadding,
  classHeadingSizeXSmallBoxSizing,
  textTextAlign,
  textFontSize,
  textLineHeight,
  textFontFamily,
  textColor,
  textFontWeight,
  wereTheLargestMargin,
  wereTheLargestAlignSelf,
  wereTheLargestOverflow,
  wereTheLargestDisplay,
  wereTheLargestFlexDirection,
  wereTheLargestAlignItems,
  wereTheLargestJustifyContent,
  pMargin,
  pAlignSelf,
  pPosition,
  pHeight,
  pOverflow,
  pFlexShrink,
  spacerAlignSelf,
  spacerOverflow,
  spacerFlexDirection,
  spacerAlignItems,
  spacerJustifyContent,
  spacerHeight,
  spacerAlignSelf1,
  spacerPosition,
  spacerOverflow1,
  spacerFlexShrink,
  spacerMargin,
}) => {
  const classHeadingSizeXSmallStyle = useMemo(() => {
    return {
      position: classHeadingSizeXSmallPosition,
      alignItems: classHeadingSizeXSmallAlignItems,
      alignSelf: classHeadingSizeXSmallAlignSelf,
      padding: classHeadingSizeXSmallPadding,
      boxSizing: classHeadingSizeXSmallBoxSizing,
    };
  }, [
    classHeadingSizeXSmallPosition,
    classHeadingSizeXSmallAlignItems,
    classHeadingSizeXSmallAlignSelf,
    classHeadingSizeXSmallPadding,
    classHeadingSizeXSmallBoxSizing,
  ]);

  const textStyle = useMemo(() => {
    return {
      textAlign: textTextAlign,
      fontSize: textFontSize,
      lineHeight: textLineHeight,
      fontFamily: textFontFamily,
      color: textColor,
      fontWeight: textFontWeight,
    };
  }, [
    textTextAlign,
    textFontSize,
    textLineHeight,
    textFontFamily,
    textColor,
    textFontWeight,
  ]);

  const wereTheLargestStyle = useMemo(() => {
    return {
      margin: wereTheLargestMargin,
      alignSelf: wereTheLargestAlignSelf,
      overflow: wereTheLargestOverflow,
      display: wereTheLargestDisplay,
      flexDirection: wereTheLargestFlexDirection,
      alignItems: wereTheLargestAlignItems,
      justifyContent: wereTheLargestJustifyContent,
    };
  }, [
    wereTheLargestMargin,
    wereTheLargestAlignSelf,
    wereTheLargestOverflow,
    wereTheLargestDisplay,
    wereTheLargestFlexDirection,
    wereTheLargestAlignItems,
    wereTheLargestJustifyContent,
  ]);

  const pStyle = useMemo(() => {
    return {
      margin: pMargin,
      alignSelf: pAlignSelf,
      position: pPosition,
      height: pHeight,
      overflow: pOverflow,
      flexShrink: pFlexShrink,
    };
  }, [pMargin, pAlignSelf, pPosition, pHeight, pOverflow, pFlexShrink]);

  const spacer1Style = useMemo(() => {
    return {
      alignSelf: spacerAlignSelf,
      overflow: spacerOverflow,
      flexDirection: spacerFlexDirection,
      alignItems: spacerAlignItems,
      justifyContent: spacerJustifyContent,
    };
  }, [
    spacerAlignSelf,
    spacerOverflow,
    spacerFlexDirection,
    spacerAlignItems,
    spacerJustifyContent,
  ]);

  const spacer2Style = useMemo(() => {
    return {
      height: spacerHeight,
      alignSelf: spacerAlignSelf1,
      position: spacerPosition,
      overflow: spacerOverflow1,
      flexShrink: spacerFlexShrink,
      margin: spacerMargin,
    };
  }, [
    spacerHeight,
    spacerAlignSelf1,
    spacerPosition,
    spacerOverflow1,
    spacerFlexShrink,
    spacerMargin,
  ]);

  return (
    <div
      className="relative flex flex-col items-start justify-start text-left text-xl text-black font-typography-label-small"
      style={classHeadingSizeXSmallStyle}
    >
      <b className="self-stretch relative leading-[28px]" style={textStyle}>
        <p className="m-0" style={wereTheLargestStyle}>
          {wereTheLargestGalleryInTh}
        </p>
        <p className="m-0">{prop}</p>
        <p className="m-0" style={pStyle}>
          {prop1}
        </p>
      </b>
      {spacer && (
        <div
          className="self-stretch overflow-hidden flex flex-col items-start justify-start"
          style={spacer1Style}
        >
          <div
            className="self-stretch relative h-3 overflow-hidden shrink-0"
            style={spacer2Style}
          />
        </div>
      )}
    </div>
  );
};

export default ClassHeadingSizeXSmall;
