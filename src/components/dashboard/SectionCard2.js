import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import SectionCard1 from "./SectionCard1";
import EvaluationSection from "./EvaluationSection";
import { useState, useEffect } from "react";
import axios from "axios";

function SectionCard2() {
  const [data, setData] = useState(null); // 데이터 초기 상태를 null로 설정
  const [sortedData, setSortedData] = useState([]); // sortedData 상태 추가

  useEffect(() => {
    // Axios를 사용하여 데이터 가져오기
    axios
      .get("/da?format=json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      // 데이터가 변경될 때 sortedData 업데이트
      updateData();
    }
  }, [data]);

  const updateData = () => {
    const sortedDataArray = Object.entries(data.da_data.daily_viewer)
      .sort((a, b) => b[1] - a[1]) // value를 기준으로 내림차순 정렬
      .map(([dateStr, value]) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줍니다.
        const day = date.getDate();
        const weekday = ["일", "월", "화", "수", "목", "금", "토"][
          date.getDay()
        ];

        // 날짜를 원하는 형식으로 조합
        const formattedDate = `${year}. ${month < 10 ? "0" : ""}${month}. ${
          day < 10 ? "0" : ""
        }${day}. (${weekday})`;
        return { date: formattedDate, value };
      });

    // sortedData 상태를 업데이트
    setSortedData(sortedDataArray);
  };

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
                {sortedData[0] ? (
                  <span>{sortedData[0].date}</span>
                ) : (
                  <span>2023년 8월 10일</span>
                )}

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
                  {sortedData[0] ? (
                    <b className="self-stretch relative leading-[28px]">
                      {sortedData[0].date}
                    </b>
                  ) : (
                    <b className="self-stretch relative leading-[28px]">
                      2023.08.10. (일)
                    </b>
                  )}

                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="w-36 flex flex-col items-center justify-start">
                  {sortedData[0] ? (
                    <b className="self-stretch relative leading-[28px]">
                      {sortedData[0].value}명
                    </b>
                  ) : (
                    <b className="self-stretch relative leading-[28px]">
                      893명
                    </b>
                  )}
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center text-dodgerblue">
                <div className="flex-1 flex flex-col items-center justify-start">
                  {sortedData[1] ? (
                    <b className="self-stretch relative leading-[28px]">
                      {sortedData[1].date}
                    </b>
                  ) : (
                    <b className="self-stretch relative leading-[28px]">
                      2023.08.02. (토)
                    </b>
                  )}
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

      <SectionCard1
        iconsChevronRight="/iconschevron-right.svg"
        label="일요일은 내가 O파게티 요리사"
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
  );
}

export default SectionCard2;
