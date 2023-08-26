import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import SectionCard1 from "./SectionCard1";
import EvaluationSection from "./EvaluationSection";

const SectionCard2 = () => {
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
              <p className="m-0">관람객들은</p>
              <p className="m-0 text-royalblue">
                <span>2023년 8월 10일</span>
                <span className="text-black">에</span>
              </p>
              <p className="m-0 text-royalblue">
                <span>가장 많은 관심</span>
                <span className="text-black">을</span>
              </p>
              <p className="m-0">보였어요</p>
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
          <div className="self-stretch flex flex-col items-center justify-start text-xl text-royalblue">
            <div className="w-[398px] flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    2023.08.10. (일)
                  </b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="w-36 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">893명</b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center text-dodgerblue">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    2023.08.02. (토)
                  </b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="w-36 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">740명</b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center text-cornflowerblue">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    2023.08.09. (금)
                  </b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="w-36 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">541명</b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center text-lightskyblue">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    2023.08.13. (수)
                  </b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="w-36 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">524명</b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center text-lavender">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    2023.08.01. (월)
                  </b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="w-36 flex flex-col items-center justify-start">
                  <b className="self-stretch relative leading-[28px]">472명</b>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
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
            <EvaluationSection
              text3="관람객 관심도는 다양한 요인으로 영향을 받을 수 있어요. 날씨, 사회 이슈, 카페 프로모션 등의 이유가 대표적이예요. 만약 특별한 이유가 없다면 요일에 따라 영향을 받을 수 있어요."
              showWereTheLargest
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
          <SectionCard1
            iconsChevronRight="/iconschevron-right.svg"
            label="일요일은 내가 O파게티 요리사"
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

export default SectionCard2;
