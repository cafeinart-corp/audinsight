import { useMemo } from "react";
import styles from "./ShapeRectSizeMediumHiera.module.css";
const ShapeRectSizeMediumHiera = ({
  iconsFavorite,
  label = "Label",
  iconsFavorite1,
  iconLeading = true,
  iconTrailing = true,
  shapeRectSizeMediumHieraPosition,
  shapeRectSizeMediumHieraWidth,
  shapeRectSizeMediumHieraFlex,
}) => {
  const shapeRectSizeMediumHieraStyle = useMemo(() => {
    return {
      position: shapeRectSizeMediumHieraPosition,
      width: shapeRectSizeMediumHieraWidth,
      flex: shapeRectSizeMediumHieraFlex,
    };
  }, [
    shapeRectSizeMediumHieraPosition,
    shapeRectSizeMediumHieraWidth,
    shapeRectSizeMediumHieraFlex,
  ]);

  return (
    <div
      className={styles.shaperectSizemediumHiera}
      style={shapeRectSizeMediumHieraStyle}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {iconLeading && (
            <img className={styles.iconsfavorite} alt="" src={iconsFavorite} />
          )}
          <div className={styles.label}>{label}</div>
          {iconTrailing && (
            <img className={styles.iconsfavorite} alt="" src={iconsFavorite1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShapeRectSizeMediumHiera;
