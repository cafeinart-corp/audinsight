import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import EvaluationSection from "./EvaluationSection";
import SectionCard1 from "./SectionCard1";

const EvaluationSection2 = () => {
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
              <p className="m-0">평가한 관람객 중</p>
              <p className="m-0">
                <span className="text-royalblue">88%가</span>
                <span> 작품을</span>
              </p>
              <p className="m-0 text-royalblue">마음에 들어했어요</p>
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
          <EvaluationSection
            text="호감도"
            text1="88%"
            text2="88%"
            prop="마음에 들어요"
            prop1="  /  평범해요"
            text3="작품 호감도는 관람객이 느끼는 가장 직접정인 감정을 나타내요. 일반적으로 70% 정도 마음에 들어해요. 이보다 높으면 작가님의 작품이 관람객들에게 긍정적인 경험을 이끌어내는 어떤 요소가 있다는 것을 의미합니다."
            propWidth="336px"
            propWidth1="336px"
            propLeft="153px"
            showWereTheLargest
          />
          <SectionCard1
            iconsChevronRight="/iconschevron-right.svg"
            label="내가 제일 잘 나가"
            iconsChevronRight1="/iconschevron-right1.svg"
            showWereTheLargest
            iconLeading={false}
            iconTrailing
          />
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

export default EvaluationSection2;
