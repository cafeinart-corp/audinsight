import { useMemo } from "react";
import styles from "./ClassLabelSizeXSmall.module.css";
const ClassLabelSizeXSmall = ({
  galleryDescription,
  spacer = true,
  classLabelSizeXSmallPosition,
  classLabelSizeXSmallTop,
  classLabelSizeXSmallLeft,
  classLabelSizeXSmallWidth,
  classLabelSizeXSmallMaxWidth,
  textColor,
  textFontSize,
  textLineHeight,
  textFontWeight,
  textTextAlign,
  wereTheLargestMargin,
  wereTheLargestAlignSelf,
  wereTheLargestOverflow,
  wereTheLargestDisplay,
  wereTheLargestFlexDirection,
  wereTheLargestAlignItems,
  wereTheLargestJustifyContent,
}) => {
  const classLabelSizeXSmallStyle = useMemo(() => {
    return {
      position: classLabelSizeXSmallPosition,
      top: classLabelSizeXSmallTop,
      left: classLabelSizeXSmallLeft,
      width: classLabelSizeXSmallWidth,
      maxWidth: classLabelSizeXSmallMaxWidth,
    };
  }, [
    classLabelSizeXSmallPosition,
    classLabelSizeXSmallTop,
    classLabelSizeXSmallLeft,
    classLabelSizeXSmallWidth,
    classLabelSizeXSmallMaxWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
      fontSize: textFontSize,
      lineHeight: textLineHeight,
      fontWeight: textFontWeight,
      textAlign: textTextAlign,
    };
  }, [textColor, textFontSize, textLineHeight, textFontWeight, textTextAlign]);

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

  return (
    <div
      className={styles.classlabelSizexsmall}
      style={classLabelSizeXSmallStyle}
    >
      <div className={styles.text} style={textStyle}>
        <p className={styles.wereTheLargest} style={wereTheLargestStyle}>
          {galleryDescription}
        </p>
        <p className={styles.wereTheLargest}>세상에서 가장 큰 아트 갤러리</p>
        <p className={styles.wereTheLargest}>0123456789</p>
      </div>
      {spacer && (
        <div className={styles.spacer}>
          <div className={styles.spacer1} />
        </div>
      )}
    </div>
  );
};

export default ClassLabelSizeXSmall;
