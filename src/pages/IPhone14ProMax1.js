import SectionCard from "../components/SectionCard";
import ArtworkSection from "../components/ArtworkSection";
import Size8px from "../components/Size8px";
import styles from "./IPhone14ProMax1.module.css";
const IPhone14ProMax1 = () => {
  return (
    <div className={styles.iphone14ProMax1}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.iconsParent}>
          <img className={styles.icons} alt="" src="/icons.svg"/>
          <div className={styles.div}>작품 상세정보</div>
          <img className={styles.icons} alt="" src="/icons1.svg" />
        </div>
      </div>
      <SectionCard />
      <Size8px
        size8pxWidth="398px"
        size8pxAlignSelf="unset"
        size8pxTop="913px"
        size8pxLeft="16px"
        spacerBackgroundColor="unset"
        spacerHeight="40px"
      />
      <div className={styles.typographyParent}>
        <div className={styles.typography}>
          <b className={styles.text}>Ah! East Asian Painting</b>
          <div className={styles.spacer}>
            <div className={styles.spacer1} />
          </div>
        </div>
        <div className={styles.typography1}>
          <b className={styles.text}>작품 정보</b>
          <div className={styles.spacer}>
            <div className={styles.spacer1} />
          </div>
        </div>
      </div>
      <Size8px
        size8pxWidth="398px"
        size8pxAlignSelf="unset"
        size8pxTop="913px"
        size8pxLeft="16px"
        spacerBackgroundColor="unset"
        spacerHeight="40px"
      />
      <ArtworkSection />
      
    </div>
  );
};

export default IPhone14ProMax1;
