import { useMemo } from "react";
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
      <div className={styles.cellDivider} />
    </div>
  );
};

export default ClassCell;
