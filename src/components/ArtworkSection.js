import Size8px from "./Size8px";
import ClassLabelSizeXSmall from "./ClassLabelSizeXSmall";
import styles from "./ArtworkSection.module.css";
const ArtworkSection = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.spacerParent}>
        <Size8px
          size8pxWidth="unset"
          size8pxPosition="unset"
          size8pxAlignSelf="stretch"
          size8pxTop="unset"
          size8pxLeft="unset"
          spacerBackgroundColor="unset"
          spacerHeight="24px"
        />
        <div className={styles.typographyParent}>
          {/* 제작년도 */}
          <ClassLabelSizeXSmall
            galleryDescription="제작년도"
            classLabelSizeXSmallPosition="absolute"
            classLabelSizeXSmallTop="0px"
            classLabelSizeXSmallLeft="0px"
            classLabelSizeXSmallWidth="unset"
            classLabelSizeXSmallMaxWidth="unset"
            textColor="#000"
            textFontSize="16px"
            textLineHeight="20px"
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
          <ClassLabelSizeXSmall
            galleryDescription="2019"
            classLabelSizeXSmallPosition="absolute"
            classLabelSizeXSmallTop="0px"
            classLabelSizeXSmallLeft="80px"
            classLabelSizeXSmallWidth="unset"
            classLabelSizeXSmallMaxWidth="unset"
            textColor="#5e5e5e"
            textFontSize="16px"
            textLineHeight="20px"
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
        </div>
        <div className={styles.typographyGroup}>
          {/* 재료 */}
          <ClassLabelSizeXSmall
            galleryDescription={"재료"}
            classLabelSizeXSmallPosition="absolute"
            classLabelSizeXSmallTop="0px"
            classLabelSizeXSmallLeft="0px"
            classLabelSizeXSmallWidth="unset"
            classLabelSizeXSmallMaxWidth="unset"
            textColor="#000"
            textFontSize="16px"
            textLineHeight="20px"
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
          <ClassLabelSizeXSmall
            galleryDescription={"캔버스, 아크릴"}
            classLabelSizeXSmallPosition="absolute"
            classLabelSizeXSmallTop="0px"
            classLabelSizeXSmallLeft="80px"
            classLabelSizeXSmallWidth="unset"
            classLabelSizeXSmallMaxWidth="unset"
            textColor="#5e5e5e"
            textFontSize="16px"
            textLineHeight="20px"
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
        </div>
        <div className={styles.typographyContainer}>
          {/* 크기 */}
          <ClassLabelSizeXSmall
            galleryDescription={"크기"}
            classLabelSizeXSmallPosition="absolute"
            classLabelSizeXSmallTop="0px"
            classLabelSizeXSmallLeft="0px"
            classLabelSizeXSmallWidth="unset"
            classLabelSizeXSmallMaxWidth="unset"
            textColor="#000"
            textFontSize="16px"
            textLineHeight="20px"
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
          <ClassLabelSizeXSmall
            galleryDescription={"100 x 100 cm"}
            classLabelSizeXSmallPosition="absolute"
            classLabelSizeXSmallTop="0px"
            classLabelSizeXSmallLeft="80px"
            classLabelSizeXSmallWidth="unset"
            classLabelSizeXSmallMaxWidth="unset"
            textColor="#5e5e5e"
            textFontSize="16px"
            textLineHeight="20px"
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
        </div>
      </div>
    </div>
  );
};

export default ArtworkSection;
