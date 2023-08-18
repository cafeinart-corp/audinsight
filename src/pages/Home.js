import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";

const Home = ({ onClose }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [loadArtistData, setArtistData] = useState({}); // API 데이터를 저장할 상태
  const [score, setHiddenLabel] = useState("0");

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const handleLikeClick = () => {
    setHiddenLabel("1");
    openFrame(); // 모달 열기
  };

  const handleCommonClick = () => {
    setHiddenLabel("0");
    openFrame();
  };

  // useEffect를 사용하여 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    fetchArtistData().then((data) => {
      if (data) {
        setArtistData(data);
        console.log(data);
      }
    });
  }, []);

  const fetchArtistData = async () => {
    try {
      const response = await axios.get(
        "https://cafeinart.du.r.appspot.com/v1/artwork/1?format=json"
      );
      return response.data; // API에서 받은 데이터 반환
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // 에러 발생 시 null 반환
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <a className="[text-decoration:none] bg-white w-full overflow-hidden flex flex-col items-center justify-center gap-[32px] min-w-[320px] max-w-[660px] text-center text-lg text-dimgray font-typography-heading-small">
        <div className="self-stretch bg-seagreen flex flex-row py-2.5 px-4 items-center justify-between">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconsmenu.svg"
          />
          <img
            className="relative w-[91px] h-4 overflow-hidden shrink-0"
            alt=""
            src="/logohorizontal.svg"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconsuser.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start">
            {/* 작가이름 */}
            {loadArtistData.artist_name ? (
              <div className="self-stretch relative leading-[24px] font-medium">
                {loadArtistData.artist_name}
              </div>
            ) : (
              <div className="self-stretch relative leading-[24px] font-medium">
                Sarah Morris
              </div>
            )}
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start text-17xl text-black">
            {/* 작품제목 */}
            {loadArtistData.title ? (
              <b className="self-stretch relative leading-[44px]">
                {loadArtistData.title}
              </b>
            ) : (
              <b className="self-stretch relative leading-[44px]">
                Ah! East Asian Painting
              </b>
            )}
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative h-6 overflow-hidden shrink-0" />
            </div>
          </div>
          {/* 첫번째 그림 */}
          <div className="self-stretch relative overflow-hidden bg-[url(https://cdn-001.begg.xyz/y-0037340E.jpg)] bg-cover bg-no-repeat bg-[top] h-[664px]">
            <div className="self-stretch absolute inset-0 overflow-hidden bg-[url(https://cdn-001.begg.xyz/y-0037340E.jpg)] bg-cover bg-no-repeat bg-[top] opacity-0 z-0">
              <div className="self-stretch absolute inset-0 h-80 transform -rotate-45 origin-0">
                <div className="self-stretch transform rotate-24.47 origin-0" />
              </div>
            </div>
          </div>

          {/* <div className="self-stretch relative overflow-hidden bg-[url(/public/fixedaspectratio-cover-template@3x.png)] bg-cover bg-no-repeat bg-[top] h-[664px]">
            <div className="self-stretch absolute inset-0 overflow-hidden bg-[url(/public/fixedaspectratiospacer@3x.png)] bg-cover bg-no-repeat bg-[top] opacity-0 z-0">
              <div className="self-stretch absolute inset-0 h-80 transform -rotate-45 origin-0">
                <div className="self-stretch transform rotate-24.47 origin-0" />
              </div>
            </div>
          </div> */}
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch relative h-6 overflow-hidden shrink-0" />
          </div>
          <div className="self-stretch flex flex-col py-0 px-4 items-center justify-start gap-[4px] text-xl text-seagreen">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col items-center justify-start">
                <b className="self-stretch relative leading-[28px]">
                  작품에 대한 의견을 남겨주세요
                </b>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-base">
                <div
                  // 좋아요 버튼 클릭 시
                  className="flex-1 flex flex-col items-center justify-center cursor-pointer"
                  onClick={handleLikeClick}
                >
                  <div className="self-stretch rounded-xl bg-whitesmoke-200 h-12 flex flex-col items-center justify-center">
                    <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/iconsfavorite.svg"
                      />
                      <div className="relative leading-[20px] font-medium">
                        좋아요
                      </div>
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/iconsfavorite.svg"
                      />
                    </div>
                  </div>
                </div>

                <div
                  // 평범해요 버튼 클릭 시
                  className="flex-1 flex flex-col items-center justify-center cursor-pointer"
                  onClick={handleCommonClick}
                >
                  <div className="self-stretch rounded-xl bg-whitesmoke-200 h-12 flex flex-col items-center justify-center">
                    <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/iconsfavorite.svg"
                      />
                      <div className="relative leading-[20px] font-medium">
                        평범해요
                      </div>
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/iconsfavorite.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-sm text-white">
              <div className="self-stretch flex flex-col items-center justify-center">
                <img
                  className="relative w-4 h-2"
                  alt=""
                  src="/top-pointer.svg"
                />
                <div className="self-stretch rounded-lg bg-seagreen flex flex-row p-2 items-center justify-center">
                  <div className="relative leading-[20px] font-medium">
                    작품을 평가하면 추첨을 통해 커피를 드려요
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch relative h-10 overflow-hidden shrink-0" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative bg-gainsboro-200 h-px" />
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[32px] text-left text-5xl">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start text-xs">
              <div className="self-stretch relative leading-[16px] font-medium">
                Artwork Information
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-seagreen">
              {/* 작품정보 */}
              {loadArtistData.title ? (
                <div className="self-stretch relative leading-[32px]">
                  {loadArtistData.title}
                </div>
              ) : (
                <div className="self-stretch relative leading-[32px]">
                  Ah! East Asian Painting
                </div>
              )}
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-black">
              <b className="self-stretch relative leading-[32px]">작품 정보</b>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col items-start justify-start text-center text-xs text-white font-ibm-plex-sans">
            {/* <div className="self-stretch rounded-3xl relative overflow-hidden bg-[url(/public/fixedaspectratio-cover-template1@3x.png)] bg-cover bg-no-repeat bg-[top] h-[664px]">
              <div className="self-stretch absolute inset-0 overflow-hidden bg-[url(/public/fixedaspectratiospacer1@3x.png)] bg-cover bg-no-repeat bg-[top] opacity-0 z-0">
                <div className="self-stretch absolute inset-0 h-72 transform -rotate-45 origin-0">
                  <div className="self-stretch transform rotate-24.47 origin-0" />
                </div>
              </div>
            </div> */}
            <div className="w-full rounded-13xl flex flex-col items-start justify-start max-w-[398px] text-left text-base text-black font-typography-heading-small">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative h-6 overflow-hidden shrink-0" />
              </div>
              <div className="relative w-[121px] h-7">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    제작년도
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[80px] flex flex-col items-start justify-start text-dimgray">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    2019
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="relative w-[168px] h-7">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    크기
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[80px] flex flex-col items-start justify-start text-dimgray">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    53 × 45 cm
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="relative w-48 h-7">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    재료
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[80px] flex flex-col items-start justify-start text-dimgray">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Oil on Canvas
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base text-black font-typography-paragraph-small">
            <div className="self-stretch relative leading-[24px]">
              {loadArtistData.description ? (
                <p className="m-0">{loadArtistData.description}</p>
              ) : (
                <p className="m-0">
                  갤러리현대는 성능경(1944년생)의 개인전 《성능경의 망친 예술
                  행각》을 8월 23일부터 10월 8일까지 개최한다. 2010년대 초반부터
                  한국 실험미술을 재조명해 온 갤러리현대와 ‘한국적 개념미술’을
                  개척한 선구자로 평가받는 성능경 작가가 함께하는 첫 전시다.
                  전시 타이틀인 ‘망친 예술’과 ‘행각’은 삶과 예술의 경계에서
                  생각의 틈새를 제시하고자 하는 성능경의 예술관을 응축한
                  키워드다. 작가는 평생 비주류적 태도를 고수하며 자신의 작품을
                  ‘망친 예술’로 명명함으로써 전통적인 예술 심미관을 재성찰하고,
                  틀에 박힌 예술의 문법과 인간 삶의 조건을 향해 질문하는
                  ‘행각(퍼포먼스)’의 변주를 오늘날까지 실천하고 있다.
                </p>
              )}

              {/* <p className="m-0">&nbsp;</p>
              <p className="m-0">
                《성능경의 망친 예술 행각》전은 작가의 시대별 대표작 140여 점을
                엄선해 미니 회고전의 형식으로 작품 세계를 조망한다. 1970년대
                신문, 사진, 행위가 융합된 ‘개념미술’ 시기의 대표작 〈수축과
                팽창〉과 〈검지〉, 1980년대 신문 보도사진을 재편집하고 이를
                공간의 조건에 따른 장소 특정적 사진-설치 형식으로 풀어낸
                〈현장〉연작, 1990년대부터 2000년대까지 전업 미술가이자 네
                아이를 둔 가장이라는 자신의 개인사를 내용으로 '망친 예술'을
                표방하며 선보인 〈S씨의 자손들 - 망친 사진이 아름답다〉과
                〈안방〉등의 사진과 사진 설치 작품, “예술은 짧고 전위의 삶은
                길다”를 실천하는 해학적 퍼포먼스, 2010년대 이후 노년의 삶을 사는
                실험미술가가 일상과 예술의 틈새를 탐색하며 제작한 〈그날그날
                영어〉, 〈손씻기〉, 〈밑그림〉 등의 작품들이 꼬리를 무는 밀도
                있는 구성으로 전시장에 펼쳐진다.
              </p> */}
            </div>
            <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
              <div className="self-stretch relative h-8 overflow-hidden shrink-0" />
            </div>
          </div>
        </div>
      </a>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent score={score} onClose={closeFrame} />
        </PortalPopup>
      )}
    </div>
  );
};

export default Home;
