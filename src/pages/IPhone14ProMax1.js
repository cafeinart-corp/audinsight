import SectionCard from "../components/SectionCard";
import ArtworkSection from "../components/ArtworkSection";
import Size8px from "../components/Size8px";
import ClassLabelSizeXSmall from "../components/ClassLabelSizeXSmall";
import styles from "./IPhone14ProMax1.module.css";
const IPhone14ProMax1 = () => {
  return (
    <div className={styles.iphone14ProMax1}>
      <SectionCard />
      <ArtworkSection />
      <Size8px
        size8pxWidth="398px"
        size8pxPosition="absolute"
        size8pxAlignSelf="unset"
        size8pxTop="913px"
        size8pxLeft="16px"
        spacerBackgroundColor="unset"
        spacerHeight="40px"
      />
      <div className={styles.typographyParent}>
        <ClassLabelSizeXSmall
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
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.iconsParent}>
          <img className={styles.icons} alt="" src="/icons.svg" />
          <div className={styles.div}>작품 상세정보</div>
          <img className={styles.icons} alt="" src="/icons1.svg" />
        </div>
      </div>
    </div>
  );
};

export default IPhone14ProMax1;
