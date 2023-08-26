import LogoHorizontal from "./LogoHorizontal";
import Size56px from "./Size56px";
import ClassHeadingSizeXSmall from "./ClassHeadingSizeXSmall";
import axios from "axios";
import { useEffect, useState } from "react";

function AudinSightCard() {
  const [data, setData] = useState({});
  const value = data.da_data;
  const artist = data.artist_name
    ? `${data.artist_name} 작가님`
    : "박세연 작가님";

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

  return (
    <div
      className="elf-stretch flex flex-col items-start justify-start gap-[32px] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), url('https://cdn-001.begg.xyz/y-0037340E.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top", // 이미지 위치 설정
        width: "100%",
      }}
    >
      <div className="self-stretch flex flex-row py-2.5 px-4 items-center justify-center">
        <a href="/">
          <LogoHorizontal
            logoHorizontalLogoHorizon="/logohorizontal.svg"
            logoHorizontalIconWidth="91px"
            logoHorizontalIconHeight="16px"
            logoHorizontalIconFlexShrink="0"
            logoHorizontalIconMixBlendMode="normal"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start">
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="128px"
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="128px"
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="128px"
        />
        <ClassHeadingSizeXSmall
          classHeadingSizeXSmallPosition="unset"
          classHeadingSizeXSmallAlignItems="flex-start"
          classHeadingSizeXSmallAlignSelf="stretch"
          classHeadingSizeXSmallPadding="0px 16px"
          classHeadingSizeXSmallBoxSizing="border-box"
          textTextAlign="center"
          textFontSize="20px"
          textLineHeight="28px"
          textFontFamily="Nuance"
          textColor="#000"
          textFontWeight="unset"
          wereTheLargestMargin="unset"
          wereTheLargestAlignSelf="stretch"
          wereTheLargestOverflow="hidden"
          wereTheLargestDisplay="flex"
          wereTheLargestFlexDirection="column"
          wereTheLargestAlignItems="flex-start"
          wereTheLargestJustifyContent="flex-start"
        />
        <ClassHeadingSizeXSmall
          wereTheLargestGalleryInTh="안녕하세요,"
          prop={artist}
          classHeadingSizeXSmallPosition="unset"
          classHeadingSizeXSmallAlignItems="flex-start"
          classHeadingSizeXSmallAlignSelf="stretch"
          classHeadingSizeXSmallPadding="0px 16px"
          classHeadingSizeXSmallBoxSizing="border-box"
          textTextAlign="center"
          textFontSize="36px"
          textLineHeight="44px"
          textFontFamily="Nuance"
          textColor="#000"
          textFontWeight="700"
          wereTheLargestMargin="0"
          wereTheLargestAlignSelf="unset"
          wereTheLargestOverflow="unset"
          wereTheLargestDisplay="unset"
          wereTheLargestFlexDirection="unset"
          wereTheLargestAlignItems="unset"
          wereTheLargestJustifyContent="unset"
          pMargin="unset"
          pAlignSelf="stretch"
          pPosition="relative"
          pHeight="24px"
          pOverflow="hidden"
          pFlexShrink="0"
        />
        <Size56px
          size56pxWidth="unset"
          size56pxPosition="unset"
          size56pxAlignSelf="stretch"
          size56pxZIndex="unset"
          spacerBackgroundColor="unset"
          spacerHeight="24px"
        />
        <ClassHeadingSizeXSmall
          wereTheLargestGalleryInTh="Starbucks 조치원점에서"
          prop="2023년 8월 1일 ~ 2023년 8월 14일"
          prop1="전시했던 작품 ‘창파’에 대한"
          classHeadingSizeXSmallPosition="unset"
          classHeadingSizeXSmallAlignItems="flex-start"
          classHeadingSizeXSmallAlignSelf="stretch"
          classHeadingSizeXSmallPadding="0px 16px"
          classHeadingSizeXSmallBoxSizing="border-box"
          textTextAlign="center"
          textFontSize="16px"
          textLineHeight="20px"
          textFontFamily="Nuance"
          textColor="#000"
          textFontWeight="500"
          wereTheLargestMargin="0"
          wereTheLargestAlignSelf="unset"
          wereTheLargestOverflow="unset"
          wereTheLargestDisplay="unset"
          wereTheLargestFlexDirection="unset"
          wereTheLargestAlignItems="unset"
          wereTheLargestJustifyContent="unset"
          pMargin="0"
          pAlignSelf="unset"
          pPosition="unset"
          pHeight="unset"
          pOverflow="unset"
          pFlexShrink="unset"
          spacerHeight="unset"
          spacerAlignSelf1="unset"
          spacerPosition="unset"
          spacerOverflow1="unset"
          spacerFlexShrink="unset"
          spacerMargin="0"
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
    </div>
  );
}

export default AudinSightCard;
