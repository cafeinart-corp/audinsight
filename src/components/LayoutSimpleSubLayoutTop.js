import { useMemo } from "react";
import styles from "./LayoutSimpleSubLayoutTop.module.css";
const LayoutSimpleSubLayoutTop = ({
  evaluationRewardMessage,
  layoutSimpleSubLayoutTopPosition,
  layoutSimpleSubLayoutTopWidth,
}) => {
  const layoutSimpleSubLayoutTopStyle = useMemo(() => {
    return {
      position: layoutSimpleSubLayoutTopPosition,
      width: layoutSimpleSubLayoutTopWidth,
    };
  }, [layoutSimpleSubLayoutTopPosition, layoutSimpleSubLayoutTopWidth]);

  return (
    <div
      className={styles.layoutsimpleSubLayouttop}
      style={layoutSimpleSubLayoutTopStyle}
    >
      <div className={styles.tooltip}>
        <img className={styles.topPointerIcon} alt="" src="/top-pointer.svg" />
        <div className={styles.container}>
          <div className={styles.label}>{evaluationRewardMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSimpleSubLayoutTop;
