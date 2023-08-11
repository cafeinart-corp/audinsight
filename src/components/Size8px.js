import { useMemo } from "react";
import styles from "./Size8px.module.css";
const Size8px = ({
  size8pxWidth,
  size8pxPosition,
  size8pxAlignSelf,
  size8pxTop,
  size8pxLeft,
  spacerBackgroundColor,
  spacerHeight,
}) => {
  const size8pxStyle = useMemo(() => {
    return {
      width: size8pxWidth,
      position: size8pxPosition,
      alignSelf: size8pxAlignSelf,
      top: size8pxTop,
      left: size8pxLeft,
    };
  }, [
    size8pxWidth,
    size8pxPosition,
    size8pxAlignSelf,
    size8pxTop,
    size8pxLeft,
  ]);

  const spacerStyle = useMemo(() => {
    return {
      backgroundColor: spacerBackgroundColor,
      height: spacerHeight,
    };
  }, [spacerBackgroundColor, spacerHeight]);

  return (
    <div className={styles.size8px} style={size8pxStyle}>
      <div className={styles.spacer} style={spacerStyle} />
    </div>
  );
};

export default Size8px;
