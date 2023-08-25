import { useMemo } from "react";

const ClassLabelSizeSmall = ({
  wereTheLargestGalleryInTh,
  prop,
  prop1,
  spacer = true,
  showWereTheLargest,
  classLabelSizeSmallPosition,
  classLabelSizeSmallAlignSelf,
  classLabelSizeSmallPadding,
  classLabelSizeSmallBoxSizing,
  classLabelSizeSmallAlignItems,
  textColor,
  textTextAlign,
  textFontSize,
  textLineHeight,
  textFontWeight,
  textFontFamily,
  wereTheLargestMargin,
  wereTheLargestAlignSelf,
  wereTheLargestOverflow,
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
  const classLabelSizeSmallStyle = useMemo(() => {
    return {
      position: classLabelSizeSmallPosition,
      alignSelf: classLabelSizeSmallAlignSelf,
      padding: classLabelSizeSmallPadding,
      boxSizing: classLabelSizeSmallBoxSizing,
      alignItems: classLabelSizeSmallAlignItems,
    };
  }, [
    classLabelSizeSmallPosition,
    classLabelSizeSmallAlignSelf,
    classLabelSizeSmallPadding,
    classLabelSizeSmallBoxSizing,
    classLabelSizeSmallAlignItems,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
      textAlign: textTextAlign,
      fontSize: textFontSize,
      lineHeight: textLineHeight,
      fontWeight: textFontWeight,
      fontFamily: textFontFamily,
    };
  }, [
    textColor,
    textTextAlign,
    textFontSize,
    textLineHeight,
    textFontWeight,
    textFontFamily,
  ]);

  const wereTheLargestStyle = useMemo(() => {
    return {
      margin: wereTheLargestMargin,
      alignSelf: wereTheLargestAlignSelf,
      overflow: wereTheLargestOverflow,
      flexDirection: wereTheLargestFlexDirection,
      alignItems: wereTheLargestAlignItems,
      justifyContent: wereTheLargestJustifyContent,
    };
  }, [
    wereTheLargestMargin,
    wereTheLargestAlignSelf,
    wereTheLargestOverflow,
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
      className="relative flex flex-col items-start justify-start text-left text-sm text-black font-typography-heading-large"
      style={classLabelSizeSmallStyle}
    >
      <div
        className="self-stretch relative leading-[20px] font-medium"
        style={textStyle}
      >
        {showWereTheLargest && (
          <p className="m-0" style={wereTheLargestStyle}>
            {wereTheLargestGalleryInTh}
          </p>
        )}
        <p className="m-0">{prop}</p>
        <p className="m-0" style={pStyle}>
          {prop1}
        </p>
      </div>
      {spacer && (
        <div
          className="self-stretch overflow-hidden flex flex-col items-start justify-start"
          style={spacer1Style}
        >
          <div
            className="self-stretch relative h-2 overflow-hidden shrink-0"
            style={spacer2Style}
          />
        </div>
      )}
    </div>
  );
};

export default ClassLabelSizeSmall;
