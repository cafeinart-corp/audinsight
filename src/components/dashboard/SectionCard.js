import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import ShapePillSizeMediumHiera from "./ShapePillSizeMediumHiera";
import ShapePillSizeXSmallHiera from "./ShapePillSizeXSmallHiera";

const SectionCard = () => {
  return (
    <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start text-center text-13xl text-dimgray-100 font-typography-heading-large">
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
          <div className="self-stretch flex flex-col items-start justify-start text-black">
            <b className="self-stretch relative leading-[40px]">
              <p className="m-0">
                <span className="text-black">{`작품 `}</span>
                <span className="text-royalblue">창파</span>
                <span>에 대해</span>
              </p>
              <p className="m-0 text-royalblue">
                <span>300개 이상의 소감</span>
                <span className="text-black">을</span>
              </p>
              <p className="m-0">남겨줬어요</p>
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
            spacerHeight="32px"
          />
          <div className="self-stretch flex flex-col items-center justify-start text-sm">
            <div className="w-[398px] flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
                <ShapePillSizeMediumHiera
                  iconsFavorite="/iconshashtag.svg"
                  label="차가워요"
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
                  label="신비로워요"
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
                  iconsFavorite="/iconshashtag1.svg"
                  label="압도적이에요"
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
                  iconsFavorite="/iconshashtag1.svg"
                  label="차가워요"
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
                  iconsFavorite="/iconshashtag1.svg"
                  label="차가워요"
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
                  label="차가워요"
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
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[20px] font-medium">
                  키워드를 누르면 소감 목록을 확인할 수 있어요
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                </div>
              </div>
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
          <Size56px
            size56pxWidth="unset"
            size56pxPosition="unset"
            size56pxAlignSelf="stretch"
            size56pxZIndex="unset"
            spacerBackgroundColor="unset"
            spacerHeight="24px"
          />
          <div className="self-stretch flex flex-col items-center justify-start text-base">
            <ClassLabelSizeSmall
              wereTheLargestGalleryInTh="획득한 배지"
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
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[20px] font-medium">
                획득한 뱃지가 없어요 :(
              </div>

              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
              </div>
            </div>
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

export default SectionCard;
