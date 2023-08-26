import { useCallback } from "react";

function Modal() {
  return (
    <div className="relative rounded-t-none rounded-b-13xl w-full flex flex-col items-start justify-start text-left text-lg text-black font-typography-label-medium">
      <div className="self-stretch rounded-t-2xl rounded-b-none bg-white shadow-[0px_-4px_16px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start gap-[8px]">
        <div className="rounded-t-2xl rounded-b-none w-[375px] overflow-hidden flex flex-col pt-3 px-0 pb-0 box-border items-center justify-center">
          <div className="relative rounded-980xl bg-gainsboro-100 w-[101px] h-1" />
        </div>
        <div className="self-stretch flex flex-row p-2 items-center justify-between">
          <div className="flex flex-col py-3 px-2 items-start justify-start">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsfavorite.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[24px] font-medium">
              도달 예측이 무엇인가요?
            </div>
            <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
              <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="flex flex-col py-3 px-2 items-start justify-start">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsclose.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative bg-gainsboro-200 h-0.5" />
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-13xl bg-white flex flex-col pt-6 px-0 pb-0 items-center justify-start gap-[24px] text-base text-dimgray font-typography-paragraph-small">
        <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start">
          <div className="self-stretch relative leading-[24px]">
            도달 예측은 오프라인을 포함해 실제로 얼마나 많은 관람객들이 작가님의
            작품을 보았을지 예측하는 AudinSight만의 데이터 입니다.
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch relative h-8 overflow-hidden shrink-0" />
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col pt-0 px-0 pb-8 items-center justify-start gap-[16px] text-seagreen font-typography-label-medium">
          <div className="self-stretch hidden flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col py-0 pr-4 pl-2 items-start justify-start gap-[4px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                <div className="w-8 flex flex-row p-1 box-border items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconscheckbox.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    약관에 모두 동의합니다
                  </div>
                  <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                    <div className="self-stretch relative h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-dimgray font-typography-paragraph-small">
                <div className="self-stretch flex flex-row py-1 px-0 items-center justify-start gap-[4px] cursor-pointer">
                  <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/iconsradio-button.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative leading-[20px]">
                      개인정보 수집·이용 동의 (필수)
                    </div>
                    <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                      <div className="self-stretch relative h-8 overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/iconschevron-right.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row py-1 px-0 items-center justify-start gap-[4px]">
                  <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/iconsradio-button1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative leading-[20px]">
                      서비스 이용약관 동의 (필수)
                    </div>
                    <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                      <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/iconschevron-right1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row py-1 px-0 items-center justify-start gap-[4px]">
                  <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/iconsradio-button2.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative leading-[20px]">
                      마케팅 활용 동의 및 광고 수신 동의 (선택)
                    </div>
                    <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                      <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/iconschevron-right2.svg"
                  />
                </div>
                <div className="self-stretch hidden flex-row py-1 px-0 items-center justify-start gap-[4px]">
                  <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/iconsradio-button3.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative leading-[20px]">
                      개인정보처리방침
                    </div>
                    <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                      <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/iconschevron-right3.svg"
                  />
                </div>
                <div className="self-stretch hidden flex-row py-1 px-0 items-center justify-start gap-[4px]">
                  <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/iconsradio-button4.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative leading-[20px]">
                      개인정보처리방침
                    </div>
                    <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                      <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/iconschevron-right4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative bg-gainsboro-200 h-px" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-lg text-black">
            <div className="self-stretch hidden flex-col py-0 px-4 items-center justify-center">
              <div className="self-stretch rounded-2xl bg-gainsboro-100 flex flex-col py-4 px-0 items-center justify-center">
                <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconsfavorite1.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Label
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconsfavorite2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-col py-0 px-4 items-center justify-center">
              <div className="self-stretch rounded-2xl bg-gainsboro-100 flex flex-col py-4 px-0 items-center justify-center">
                <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconsfavorite3.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Label
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconsfavorite4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col py-0 px-4 items-center justify-center text-white">
              <div className="self-stretch rounded-2xl bg-seagreen flex flex-col py-4 px-0 items-center justify-center">
                <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconscafe.svg"
                  />
                  <div
                    className="relative leading-[24px] font-medium"
                    style={{ cursor: "pointer" }}
                  >
                    확인했어요
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconscafe1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-col py-0 px-4 items-center justify-center">
              <div className="self-stretch rounded-2xl flex flex-col py-4 px-0 items-center justify-center">
                <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconsfavorite5.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    다음에 가입할게요
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconsfavorite6.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
