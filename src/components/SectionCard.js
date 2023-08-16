import ClassLabelSizeXSmall from "./ClassLabelSizeXSmall";
import Size8px from "./Size8px";
import ShapeRectSizeMediumHiera from "./ShapeRectSizeMediumHiera";
import LayoutSimpleSubLayoutTop from "./LayoutSimpleSubLayoutTop";
import ClassCell from "./ClassCell";
import styles from "./SectionCard.module.css";
const SectionCard = () => {
  return (
    <div className={styles.typographyParent}>
      <ClassLabelSizeXSmall
        galleryDescription="Sarah Morris"
        classLabelSizeXSmallPosition="unset"
        classLabelSizeXSmallTop="unset"
        classLabelSizeXSmallLeft="unset"
        classLabelSizeXSmallWidth="unset"
        classLabelSizeXSmallMaxWidth="unset"
        textColor="#5e5e5e"
        textFontSize="18px"
        textLineHeight="24px"
        textFontWeight="500"
        textTextAlign="center"
        wereTheLargestMargin="unset"
        wereTheLargestAlignSelf="stretch"
        wereTheLargestOverflow="hidden"
        wereTheLargestDisplay="flex"
        wereTheLargestFlexDirection="column"
        wereTheLargestAlignItems="flex-start"
        wereTheLargestJustifyContent="flex-start"
      />
      <ClassLabelSizeXSmall
        galleryDescription="Ah! East Asian Painting"
        classLabelSizeXSmallPosition="unset"
        classLabelSizeXSmallTop="unset"
        classLabelSizeXSmallLeft="unset"
        classLabelSizeXSmallWidth="398px"
        classLabelSizeXSmallMaxWidth="398px"
        textColor="#000"
        textFontSize="36px"
        textLineHeight="44px"
        textFontWeight="bold"
        textTextAlign="center"
        wereTheLargestMargin="unset"
        wereTheLargestAlignSelf="stretch"
        wereTheLargestOverflow="hidden"
        wereTheLargestDisplay="flex"
        wereTheLargestFlexDirection="column"
        wereTheLargestAlignItems="flex-start"
        wereTheLargestJustifyContent="flex-start"
      />
      <img className={styles.frameChild} alt="" src="/rectangle-3@2x.png" />
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
        <div className={styles.groupParent}>
          <div className={styles.typographyGroup}>
            <ClassLabelSizeXSmall
              galleryDescription="작품에 대한 의견을 남겨주세요."
              classLabelSizeXSmallPosition="absolute"
              classLabelSizeXSmallTop="0px"
              classLabelSizeXSmallLeft="calc(50% - 140px)"
              classLabelSizeXSmallWidth="unset"
              classLabelSizeXSmallMaxWidth="unset"
              textColor="#006c4b"
              textFontSize="20px"
              textLineHeight="28px"
              textFontWeight="bold"
              textTextAlign="left"
              wereTheLargestMargin="unset"
              wereTheLargestAlignSelf="stretch"
              wereTheLargestOverflow="hidden"
              wereTheLargestDisplay="flex"
              wereTheLargestFlexDirection="column"
              wereTheLargestAlignItems="flex-start"
              wereTheLargestJustifyContent="flex-start"
            />
            <div className={styles.buttonParent}>
              <ShapeRectSizeMediumHiera
                iconsFavorite="/iconsfavorite.svg"
                label="좋아요"
                iconsFavorite1="/iconsfavorite.svg"
                iconLeading={false}
                iconTrailing={false}
                shapeRectSizeMediumHieraPosition="unset"
                shapeRectSizeMediumHieraWidth="unset"
                shapeRectSizeMediumHieraFlex="1"
              />
              <ShapeRectSizeMediumHiera
                iconsFavorite="/iconsfavorite.svg"
                label="평범해요"
                iconsFavorite1="/iconsfavorite.svg"
                iconLeading={false}
                iconTrailing={false}
                shapeRectSizeMediumHieraPosition="unset"
                shapeRectSizeMediumHieraWidth="unset"
                shapeRectSizeMediumHieraFlex="1"
              />
            </div>
          </div>
          <LayoutSimpleSubLayoutTop
            evaluationRewardMessage="작품을 평가하면 추첨을 통해 커피를 드려요"
            layoutSimpleSubLayoutTopPosition="unset"
            layoutSimpleSubLayoutTopWidth="398px"
          />
        </div>
        <Size8px
          size8pxWidth="unset"
          size8pxPosition="unset"
          size8pxAlignSelf="stretch"
          size8pxTop="unset"
          size8pxLeft="unset"
          spacerBackgroundColor="unset"
          spacerHeight="40px"
        />
        <ClassCell
          classCellPosition="unset"
          classCellWidth="398px"
          classCellMaxWidth="398px"
        />
      </div>
    </div>
  );
};

export default SectionCard;
