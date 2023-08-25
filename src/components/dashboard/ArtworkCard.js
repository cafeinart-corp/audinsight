import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import ShapePillSizeMediumHiera from "./ShapePillSizeMediumHiera";
import ShapePillSizeXSmallHiera from "./ShapePillSizeXSmallHiera";

const ArtworkCard = () => {
  return (
    <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start text-center text-13xl text-black font-typography-heading-large">
      <div className="self-stretch flex flex-col items-start justify-start">
        <ClassCell
          classCellPosition="unset"
          classCellWidth="unset"
          classCellAlignSelf="stretch"
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="96px"
        />
        <div className="self-stretch flex flex-col items-center justify-start">
          <ClassLabelSizeSmall
            showWereTheLargest
            classLabelSizeSmallPosition="unset"
            classLabelSizeSmallAlignSelf="stretch"
            classLabelSizeSmallPadding="unset"
            classLabelSizeSmallBoxSizing="unset"
            classLabelSizeSmallAlignItems="flex-start"
            textColor="#000"
            textTextAlign="center"
            textFontSize="18px"
            textLineHeight="24px"
            textFontWeight="500"
            textFontFamily="Nuance"
            wereTheLargestMargin="unset"
            wereTheLargestAlignSelf="stretch"
            wereTheLargestOverflow="hidden"
            wereTheLargestFlexDirection="column"
            wereTheLargestAlignItems="flex-start"
            wereTheLargestJustifyContent="flex-start"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[40px]">
              <p className="m-0">작가님의 다음 그림,</p>
              <p className="m-0">이거 어때요?</p>
            </b>
            <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
              <div className="self-stretch relative h-5 overflow-hidden shrink-0" />
            </div>
          </div>
          <Size56px
            size56pxWidth="unset"
            size56pxPosition="unset"
            size56pxAlignSelf="stretch"
            size56pxZIndex="unset"
            spacerBackgroundColor="unset"
            spacerHeight="24px"
          />
          <ClassLabelSizeSmall
            showWereTheLargest
            classLabelSizeSmallPosition="unset"
            classLabelSizeSmallAlignSelf="stretch"
            classLabelSizeSmallPadding="unset"
            classLabelSizeSmallBoxSizing="unset"
            classLabelSizeSmallAlignItems="flex-start"
            textColor="#266ef1"
            textTextAlign="center"
            textFontSize="18px"
            textLineHeight="28px"
            textFontWeight="unset"
            textFontFamily="Pretendard"
            wereTheLargestMargin="unset"
            wereTheLargestAlignSelf="stretch"
            wereTheLargestOverflow="hidden"
            wereTheLargestFlexDirection="column"
            wereTheLargestAlignItems="flex-start"
            wereTheLargestJustifyContent="flex-start"
          />
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
                <ShapePillSizeMediumHiera
                  iconsFavorite="/iconshashtag.svg"
                  label="1920년대"
                  iconsFavorite1="/iconschevron-right.svg"
                  iconLeading
                  iconTrailing={false}
                  shapePillSizeMediumHieraPosition="unset"
                  shapePillSizeMediumHieraPadding="unset"
                  shapePillSizeMediumHieraBoxSizing="unset"
                  frameDivBackgroundColor="#266ef1"
                  frameDivPadding="14px 0px"
                  iconsFavoriteWidth="20px"
                  iconsFavoriteHeight="20px"
                  labelColor="#fff"
                  iconsFavoriteWidth1="20px"
                  iconsFavoriteHeight1="20px"
                />
                <ShapePillSizeMediumHiera
                  iconsFavorite="/iconshashtag.svg"
                  label="유화"
                  iconsFavorite1="/iconschevron-right.svg"
                  iconLeading
                  iconTrailing={false}
                  shapePillSizeMediumHieraPosition="unset"
                  shapePillSizeMediumHieraPadding="unset"
                  shapePillSizeMediumHieraBoxSizing="unset"
                  frameDivBackgroundColor="#266ef1"
                  frameDivPadding="14px 0px"
                  iconsFavoriteWidth="20px"
                  iconsFavoriteHeight="20px"
                  labelColor="#fff"
                  iconsFavoriteWidth1="20px"
                  iconsFavoriteHeight1="20px"
                />
                <ShapePillSizeMediumHiera
                  iconsFavorite="/iconshashtag.svg"
                  label="서양화"
                  iconsFavorite1="/iconschevron-right.svg"
                  iconLeading
                  iconTrailing={false}
                  shapePillSizeMediumHieraPosition="unset"
                  shapePillSizeMediumHieraPadding="unset"
                  shapePillSizeMediumHieraBoxSizing="unset"
                  frameDivBackgroundColor="#266ef1"
                  frameDivPadding="14px 0px"
                  iconsFavoriteWidth="20px"
                  iconsFavoriteHeight="20px"
                  labelColor="#fff"
                  iconsFavoriteWidth1="20px"
                  iconsFavoriteHeight1="20px"
                />
                <ShapePillSizeMediumHiera
                  iconsFavorite="/iconshashtag.svg"
                  label="20호"
                  iconsFavorite1="/iconschevron-right.svg"
                  iconLeading
                  iconTrailing={false}
                  shapePillSizeMediumHieraPosition="unset"
                  shapePillSizeMediumHieraPadding="unset"
                  shapePillSizeMediumHieraBoxSizing="unset"
                  frameDivBackgroundColor="#266ef1"
                  frameDivPadding="14px 0px"
                  iconsFavoriteWidth="20px"
                  iconsFavoriteHeight="20px"
                  labelColor="#fff"
                  iconsFavoriteWidth1="20px"
                  iconsFavoriteHeight1="20px"
                />
                <ShapePillSizeMediumHiera
                  iconsFavorite="/iconshashtag.svg"
                  label="초현실주의"
                  iconsFavorite1="/iconschevron-right.svg"
                  iconLeading
                  iconTrailing={false}
                  shapePillSizeMediumHieraPosition="unset"
                  shapePillSizeMediumHieraPadding="unset"
                  shapePillSizeMediumHieraBoxSizing="unset"
                  frameDivBackgroundColor="#266ef1"
                  frameDivPadding="14px 0px"
                  iconsFavoriteWidth="20px"
                  iconsFavoriteHeight="20px"
                  labelColor="#fff"
                  iconsFavoriteWidth1="20px"
                  iconsFavoriteHeight1="20px"
                />
              </div>
              <Size56px
                size56pxWidth="unset"
                size56pxPosition="unset"
                size56pxAlignSelf="stretch"
                size56pxZIndex="unset"
                spacerBackgroundColor="unset"
                spacerHeight="12px"
              />
              <Size56px
                size56pxWidth="unset"
                size56pxPosition="unset"
                size56pxAlignSelf="stretch"
                size56pxZIndex="unset"
                spacerBackgroundColor="unset"
                spacerHeight="12px"
              />
              <ShapePillSizeXSmallHiera
                iconsFavorite="/iconschevron-right.svg"
                label="AI"
                iconsFavorite1="/iconshelp.svg"
                iconLeading={false}
                iconTrailing
                shapePillSizeXSmallHieraPosition="unset"
                labelColor="#5e5e5e"
              />
              <Size56px
                size56pxWidth="unset"
                size56pxPosition="unset"
                size56pxAlignSelf="stretch"
                size56pxZIndex="unset"
                spacerBackgroundColor="unset"
                spacerHeight="24px"
              />
            </div>
            <Size56px
              size56pxWidth="unset"
              size56pxPosition="unset"
              size56pxAlignSelf="stretch"
              size56pxZIndex="unset"
              spacerBackgroundColor="unset"
              spacerHeight="24px"
            />
          </div>
        </div>
      </div>
      <Size56px
        size56pxWidth="unset"
        size56pxPosition="unset"
        size56pxAlignSelf="stretch"
        size56pxZIndex="unset"
        spacerBackgroundColor="unset"
        spacerHeight="56px"
      />
    </div>
  );
};

export default ArtworkCard;
