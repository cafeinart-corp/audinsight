import { useMemo } from "react";
import ClassLabelSizeXSmall from "../components/ClassLabelSizeXSmall";
import styles from "./ClassCell.module.css";
const ClassCell = ({
  classCellPosition,
  classCellWidth,
  classCellMaxWidth,
}) => {
  const classCellStyle = useMemo(() => {
    return {
      position: classCellPosition,
      width: classCellWidth,
      maxWidth: classCellMaxWidth,
    };
  }, [classCellPosition, classCellWidth, classCellMaxWidth]);

  return (
    <div className={styles.classcell} style={classCellStyle}>
      <ClassLabelSizeXSmall
          //작품정보
          galleryDescription="Artwork Information"
          classLabelSizeXSmallPosition="unset"
          classLabelSizeXSmallTop="unset"
          classLabelSizeXSmallLeft="unset"
          classLabelSizeXSmallWidth="unset"
          classLabelSizeXSmallMaxWidth="unset"
          textColor="#5e5e5e"
          textFontSize="12px"
          textLineHeight="16px"
          textFontWeight="500"
          textTextAlign="left"
          wereTheLargestMargin="unset"
          wereTheLargestAlignSelf="stretch"
          wereTheLargestOverflow="hidden"
          wereTheLargestDisplay="flex"
          wereTheLargestFlexDirection="column"
          wereTheLargestAlignItems="flex-start"
          wereTheLargestJustifyContent="flex-start"
        />
      <div className={styles.cellDivider} />
    </div>
  );
};

export default ClassCell;
