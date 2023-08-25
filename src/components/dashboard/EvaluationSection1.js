import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import EvaluationSection from "./EvaluationSection";

const EvaluationSection1 = () => {
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
              <p className="m-0">
                <span>관람객 3,981명 중 </span>
                <span className="text-royalblue">1,990명이</span>
                <span className="text-black"> 작품을</span>
              </p>
              <p className="m-0 text-royalblue">평가했어요</p>
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
            text="평가 전환 비율"
            text1="50%"
            text2="50%"
            prop="평가"
            prop1="  /  평가 하지 않음"
            text3="작품 평가 전환율 관람객이 작가님의 작품을 관람한 후, 실제 평가로 얼마나 이어지는지를 확인할 수 있어요. 만약 평가 전환 비율이 높다면, 그만큼 작가님의 그림에 이끌리는 사람이 많다는 뜻 일수도 있어요."
            showWereTheLargest
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start text-base text-dimgray-100">
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

export default EvaluationSection1;
