import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import PieChart from "../chart/PieChart";
import EvaluationSection from "./EvaluationSection";
import HowBattery from "../chart/HowBattery";

const SectionCardFormFilter = () => {
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
              <p className="m-0 text-royalblue">
                <span>20세~24세</span>
                <span className="text-black">와</span>
              </p>
              <p className="m-0">
                <span className="text-royalblue">남성</span>
                <span>이 작품을 제일</span>
              </p>
              <p className="m-0">좋아했어요</p>
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
          <div className="self-stretch flex flex-col items-center justify-start text-sm text-white">
            <div className="w-[398px] flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col items-center justify-start relative">
                <EvaluationSection text="긍정 평가 비율" text1="61.2%" />
                <HowBattery />
                <Size56px
                  size56pxWidth="unset"
                  size56pxPosition="unset"
                  size56pxAlignSelf="stretch"
                  size56pxZIndex="3"
                  spacerBackgroundColor="unset"
                  spacerHeight="16px"
                />
              </div>
              <div className="flex flex-col items-start justify-start text-royalblue">
                <div className="self-stretch relative leading-[20px] font-medium">
                  <span>남성</span>
                  <span className="text-darkslategray"> / 여성</span>
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                </div>
              </div>
            </div>

            <PieChart />
            <Size56px
              size56pxWidth="unset"
              size56pxPosition="unset"
              size56pxAlignSelf="stretch"
              size56pxZIndex="unset"
              spacerBackgroundColor="unset"
              spacerHeight="32px"
            />
            <ClassLabelSizeSmall
              showWereTheLargest
              classLabelSizeSmallPosition="unset"
              classLabelSizeSmallAlignSelf="stretch"
              classLabelSizeSmallPadding="unset"
              classLabelSizeSmallBoxSizing="unset"
              classLabelSizeSmallAlignItems="flex-start"
              textColor="#5e5e5e"
              textTextAlign="center"
              textFontSize="16px"
              textLineHeight="24px"
              textFontWeight="unset"
              textFontFamily="Pretendard"
              wereTheLargestMargin="unset"
              wereTheLargestAlignSelf="stretch"
              wereTheLargestOverflow="hidden"
              wereTheLargestFlexDirection="column"
              wereTheLargestAlignItems="flex-start"
              wereTheLargestJustifyContent="flex-start"
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
            <div className="flex flex-row items-start justify-center">
              <div className="self-stretch w-[398px] flex flex-col items-center justify-start">
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

export default SectionCardFormFilter;
