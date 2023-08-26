import ClassCell from "./ClassCell";
import Size56px from "./Size56px";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";
import ReviewContainer from "./ReviewContainer";
import ShapePillSizeMediumHiera from "./ShapePillSizeMediumHiera";
import ShapePillSizeXSmallHiera from "./ShapePillSizeXSmallHiera";
import axios from "axios";
import { useEffect, useState } from "react";

const FeedbackCard = () => {
  const [data, setData] = useState({ da_data: { keyword: [] } });
  const [topWords, setTopWords] = useState([]);
  const [eachValue, setEachValue] = useState([0, 0, 0, 0, 0, 0]);
  const [sumOfValues, setSumOfValues] = useState(0);

  const [topBadWords, setTopBadWords] = useState([]);
  const [eachBadValue, setEachBadValue] = useState([0, 0, 0, 0, 0, 0]);
  const [sumOfBadValues, setSumOfBadValues] = useState(0);

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
    if (data.da_data.keyword.length > 0) {
      const jsonData = data.da_data.keyword[1].sort((a, b) => b[1] - a[1]);
      const jsonBadData = data.da_data.keyword[2].sort((a, b) => b[1] - a[1]);
      // 상위 6개 배열 선택
      const topItems = jsonData.slice(0, 6);
      const topBadItems = jsonBadData.slice(0, 6);
      // 상위 6개 객체를 매핑하고 정보 출력
      const words = topItems.map((obj) => obj[0]);
      const badWords = topBadItems.map((obj) => obj[0]);

      const eachValue = topItems.map((obj) => obj[1]);
      const eachBadValue = topBadItems.map((obj) => obj[1]);

      const values = topItems.reduce((acc, obj) => acc + obj[1], 0);
      const badValues = topBadItems.reduce((acc, obj) => acc + obj[1], 0);

      // topWords와 sumOfValues 상태 업데이트
      setEachValue(eachValue);
      setTopWords(words);
      setSumOfValues(values - eachValue[0]);
      setTopBadWords(badWords);
      setEachBadValue(eachBadValue);
      setSumOfBadValues(badValues - eachBadValue[0]);
    }
  }, [data]);
  console.log(data);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-dimgray-100 font-typography-heading-large">
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
        <ReviewContainer
          prop="작가님의 작품을"
          prop1="좋아한 관람객들은"
          prop2="아래와 같이 남겨줬어요"
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="32px"
        />
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="w-[398px] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag.svg"
                label={topWords[0]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#266ef1"
                opacity={1}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag.svg"
                label={topWords[1]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#266ef1"
                opacity={(eachValue[1] / sumOfValues) * 1.5}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag1.svg"
                label={topWords[2]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#266ef1"
                opacity={(eachValue[2] / sumOfValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag1.svg"
                label={topWords[3]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#266ef1"
                opacity={(eachValue[3] / sumOfValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag1.svg"
                label={topWords[4]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#266ef1"
                opacity={(eachValue[4] / sumOfValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag.svg"
                label={topWords[5]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#266ef1"
                opacity={(eachValue[5] / sumOfValues) * 3}
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
            spacerHeight="64px"
          />
        </div>
        <ReviewContainer
          prop="작가님의 작품에 따로"
          prop1="흥미를 갖지 않은 관람객은"
          prop2="아래와 같은 반응을 보였어요"
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="32px"
        />
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="w-[398px] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag.svg"
                label={topBadWords[0]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#de1135"
                opacity={1}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag.svg"
                label={topBadWords[1]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#de1135"
                opacity={(eachBadValue[1] / sumOfBadValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag1.svg"
                label={topBadWords[2]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#de1135"
                opacity={(eachBadValue[2] / sumOfBadValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag1.svg"
                label={topBadWords[3]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#de1135"
                opacity={(eachBadValue[3] / sumOfBadValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag1.svg"
                label={topBadWords[4]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#de1135"
                opacity={(eachBadValue[4] / sumOfBadValues) * 3}
                frameDivPadding="14px 0px"
                iconsFavoriteWidth="20px"
                iconsFavoriteHeight="20px"
                labelColor="#fff"
                iconsFavoriteWidth1="20px"
                iconsFavoriteHeight1="20px"
              />
              <ShapePillSizeMediumHiera
                iconsFavorite="/iconshashtag.svg"
                label={topBadWords[5]}
                iconsFavorite1="/iconschevron-right.svg"
                iconLeading
                iconTrailing={false}
                shapePillSizeMediumHieraPosition="unset"
                shapePillSizeMediumHieraPadding="unset"
                shapePillSizeMediumHieraBoxSizing="unset"
                frameDivBackgroundColor="#de1135"
                opacity={(eachBadValue[5] / sumOfBadValues) * 3}
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
  );
};

export default FeedbackCard;
