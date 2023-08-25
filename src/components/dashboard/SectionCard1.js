import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import ShapePillSizeMediumHiera from "./ShapePillSizeMediumHiera";

const SectionCard1 = ({
  iconsChevronRight,
  label,
  iconsChevronRight1,
  showWereTheLargest,
  spacer,
  iconLeading,
  iconTrailing,
}) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start">
      <ClassLabelSizeSmall
        showWereTheLargest
        classLabelSizeSmallPosition="unset"
        classLabelSizeSmallAlignSelf="stretch"
        classLabelSizeSmallPadding="unset"
        classLabelSizeSmallBoxSizing="unset"
        classLabelSizeSmallAlignItems="center"
        textColor="#000"
        textTextAlign="center"
        textFontSize="20px"
        textLineHeight="28px"
        textFontWeight="bold"
        textFontFamily="Nuance"
        wereTheLargestMargin="unset"
        wereTheLargestAlignSelf="stretch"
        wereTheLargestOverflow="hidden"
        wereTheLargestFlexDirection="column"
        wereTheLargestAlignItems="flex-start"
        wereTheLargestJustifyContent="flex-start"
      />
      <div className="flex flex-row items-start justify-center">
        <ShapePillSizeMediumHiera
          iconsFavorite="/iconschevron-right.svg"
          label="상위 5%"
          iconsFavorite1="/iconschevron-right1.svg"
          iconLeading={false}
          iconTrailing
          shapePillSizeMediumHieraPosition="unset"
          shapePillSizeMediumHieraPadding="6px 0px"
          shapePillSizeMediumHieraBoxSizing="border-box"
          frameDivBackgroundColor="#266ef1"
          frameDivPadding="8px 0px"
          iconsFavoriteWidth="16px"
          iconsFavoriteHeight="16px"
          labelColor="#fff"
          iconsFavoriteWidth1="16px"
          iconsFavoriteHeight1="16px"
        />
      </div>
    </div>
  );
};

export default SectionCard1;
