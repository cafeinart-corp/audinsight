import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import SectionCard1 from "./SectionCard1";
import LineMarkChart from "../chart/LineMarkChart";

function FormContainer1() {
  return (
    <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[32px] text-center text-xl text-black font-typography-heading-large">
      <Size56px
        size56pxWidth="unset"
        size56pxPosition="unset"
        size56pxAlignSelf="stretch"
        size56pxZIndex="unset"
        spacerBackgroundColor="unset"
        spacerHeight="96px"
      />
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col py-0 px-5 items-start justify-start">
          <ClassLabelSizeSmall
            prop="도달 예측"
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
          <ClassLabelSizeSmall
            wereTheLargestGalleryInTh="‘창파' 작품은"
            prop="약 3,900명 이상이"
            prop1="관람했어요"
            spacer
            showWereTheLargest
            classLabelSizeSmallPosition="unset"
            classLabelSizeSmallAlignSelf="stretch"
            classLabelSizeSmallPadding="unset"
            classLabelSizeSmallBoxSizing="unset"
            classLabelSizeSmallAlignItems="flex-start"
            textColor="#000"
            textTextAlign="center"
            textFontSize="32px"
            textLineHeight="40px"
            textFontWeight="bold"
            textFontFamily="Nuance"
            wereTheLargestMargin="0"
            wereTheLargestAlignSelf="unset"
            wereTheLargestOverflow="unset"
            wereTheLargestFlexDirection="unset"
            wereTheLargestAlignItems="unset"
            wereTheLargestJustifyContent="unset"
            pMargin="0"
            pAlignSelf="unset"
            pPosition="unset"
            pHeight="unset"
            pOverflow="unset"
            pFlexShrink="unset"
            spacerAlignSelf="stretch"
            spacerOverflow="hidden"
            spacerFlexDirection="column"
            spacerAlignItems="flex-start"
            spacerJustifyContent="flex-start"
            spacerHeight="20px"
            spacerAlignSelf1="stretch"
            spacerPosition="relative"
            spacerOverflow1="hidden"
            spacerFlexShrink="0"
            spacerMargin="unset"
          />
          <ClassLabelSizeSmall
            wereTheLargestGalleryInTh="도달예측은 오프라인을 포함해"
            prop="실제로 얼마나 많은 관람객들이 작가님의 작품을 보았을지"
            prop1="예측하는 AudinSight만의 데이터 입니다."
            spacer
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
            textFontWeight="200"
            textFontFamily="Nuance"
            wereTheLargestMargin="0"
            wereTheLargestAlignSelf="unset"
            wereTheLargestOverflow="unset"
            wereTheLargestFlexDirection="unset"
            wereTheLargestAlignItems="unset"
            wereTheLargestJustifyContent="unset"
            pMargin="0"
            pAlignSelf="unset"
            pPosition="unset"
            pHeight="unset"
            pOverflow="unset"
            pFlexShrink="unset"
            spacerAlignSelf="stretch"
            spacerOverflow="hidden"
            spacerFlexDirection="column"
            spacerAlignItems="flex-start"
            spacerJustifyContent="flex-start"
            spacerHeight="20px"
            spacerAlignSelf1="stretch"
            spacerPosition="relative"
            spacerOverflow1="hidden"
            spacerFlexShrink="0"
            spacerMargin="unset"
          />
          <Size56px
            size56pxWidth="unset"
            size56pxPosition="unset"
            size56pxAlignSelf="stretch"
            size56pxZIndex="unset"
            spacerBackgroundColor="unset"
            spacerHeight="32px"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="w-[398px] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <b className="self-stretch relative leading-[28px]">
                도달 (예측)
              </b>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-17xl">
              <b className="self-stretch relative leading-[44px]">3,981명</b>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-6 overflow-hidden shrink-0" />
              </div>
              <Size56px
                size56pxWidth="unset"
                size56pxPosition="unset"
                size56pxAlignSelf="stretch"
                size56pxZIndex="unset"
                spacerBackgroundColor="unset"
                spacerHeight="24px"
              />
              <LineMarkChart />
            </div>
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
        <SectionCard1
          iconsChevronRight="/iconschevron-right.svg"
          label="상위 5%"
          iconsChevronRight1="/iconschevron-right1.svg"
          showWereTheLargest
          iconLeading={false}
          iconTrailing
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="56px"
        />
      </div>
    </div>
  );
}

export default FormContainer1;
