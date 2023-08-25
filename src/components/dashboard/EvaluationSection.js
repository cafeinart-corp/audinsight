import { useMemo } from "react";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";

const EvaluationSection = ({
  text,
  text1,
  text2,
  prop,
  prop1,
  text3,
  propWidth,
  propWidth1,
  propLeft,
  showWereTheLargest,
  spacer,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const typographyStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start text-center text-sm text-black font-typography-heading-large">
      <div className="w-[398px] flex flex-col items-center justify-start text-xl">
        <div className="self-stretch flex flex-col items-center justify-start">
          <b className="self-stretch relative leading-[28px]">{text}</b>
          <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
            <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-17xl">
          <b className="self-stretch relative leading-[44px]">{text1}</b>
          <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
            <div className="self-stretch relative h-6 overflow-hidden shrink-0" />
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
      </div>
      <div className="self-stretch flex flex-col items-center justify-start relative text-white">
        <div className="self-stretch relative bg-whitesmoke h-10 z-[0]" />
        <div
          className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[201px] h-10 z-[1]"
          style={groupDivStyle}
        >
          <div
            className="absolute top-[0px] left-[0px] bg-royalblue w-[201px] h-10"
            style={rectangleDivStyle}
          />
        </div>
        <div
          className="my-0 mx-[!important] absolute top-[10px] left-[85px] flex flex-col items-start justify-start z-[2]"
          style={typographyStyle}
        >
          <div className="self-stretch relative leading-[20px] font-medium">
            {text2}
          </div>
          <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
            <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
          </div>
        </div>
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
          <span>{prop}</span>
          <span className="text-darkslategray">{prop1}</span>
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
        spacerHeight="24px"
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
  );
};

export default EvaluationSection;
