import React, { useCallback, useState } from "react";
import axios from "axios";

const FrameComponent = ({ score, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    score,
    birth_date: "",
    agreeToTerms: false,
    option1: false,
    option2: false,
    option3: false,
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "agreeToTerms") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        option1: checked,
        option2: checked,
        option3: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    try {
      const response = await axios.post(
        "https://cafeinart.du.r.appspot.com/v1/eval/1",
        { ...formData }
      );
      console.log("Post request response:", response.data);
      alert("평가가 완료되었습니다.");
      onClose();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const onPersonalInfoDetail = useCallback(() => {
    // 개인정보 취급 방침
    console.log("개인정보 취급 방침");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative rounded-t-none rounded-b-13xl flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-left text-lg text-black font-typography-heading-small">
        <div className="rounded-t-2xl rounded-b-none bg-white shadow-[0px_-4px_16px_rgba(0,_0,_0,_0.08)] w-80 flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch flex flex-row pt-3 px-2 pb-1 items-center justify-between">
            <div className="flex flex-col py-3 px-2 items-start justify-start">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsfavorite.svg"
              />
            </div>
            <div className="w-[233px] flex flex-col items-center justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[24px] font-medium">
                  등록하고 계속하세요
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-sm text-dimgray font-typography-paragraph-small">
                <div className="self-stretch relative leading-[20px]">
                  작품 평가를 위해서 등록이 필요해요
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-3 px-2 items-start justify-start">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsfavorite.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative bg-gainsboro-200 h-0.5" />
          </div>
        </div>
        <div className="rounded-t-none rounded-b-13xl bg-white w-80 flex flex-col pt-6 px-0 pb-0 box-border items-center justify-start gap-[24px] text-dimgray font-typography-paragraph-small">
          <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start text-black font-typography-heading-small">
              <div className="self-stretch relative leading-[24px] font-medium">
                이름
              </div>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-gainsboro-100 h-14 flex flex-col items-start justify-start relative min-w-[140px]">
              <div className="my-0 mx-[!important] absolute top-[14px] left-[16px] flex flex-col items-start justify-start z-[0]">
                <div className="self-stretch relative leading-[28px]">
                  <input
                    // 이름 input
                    className="self-stretch relative leading-[28px] bg-gainsboro-100"
                    type="text"
                    placeholder="이름"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  ></input>
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-10 overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch relative leading-[20px]">Hint</div>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start text-black font-typography-heading-small">
              <div className="self-stretch relative leading-[24px] font-medium">
                전화번호
              </div>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-gainsboro-100 h-14 flex flex-col items-start justify-start relative min-w-[140px]">
              <div className="my-0 mx-[!important] absolute top-[14px] left-[16px] flex flex-col items-start justify-start z-[0]">
                <div className="self-stretch relative leading-[28px]">
                  <input
                    // 전화번호 input
                    className="self-stretch relative leading-[28px] bg-gainsboro-100"
                    type="tel"
                    placeholder="전화번호"
                    value={formData.phone_number}
                    onChange={(e) =>
                      setFormData({ ...formData, phone_number: e.target.value })
                    }
                    required
                  ></input>
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-10 overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch relative leading-[20px]">Hint</div>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start text-black font-typography-heading-small">
              <div className="self-stretch relative leading-[24px] font-medium">
                생일
              </div>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-3 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-gainsboro-100 h-14 flex flex-col items-start justify-start relative min-w-[140px]">
              <div className="my-0 mx-[!important] absolute top-[14px] left-[16px] flex flex-col items-start justify-start z-[0]">
                <div className="self-stretch relative leading-[28px]">
                  <input
                    // 생일 input
                    className="self-stretch relative leading-[28px] bg-gainsboro-100 text-black"
                    type="date"
                    placeholder="태어난 년도"
                    value={formData.birth_date}
                    onChange={(e) =>
                      setFormData({ ...formData, birth_date: e.target.value })
                    }
                    required
                  ></input>
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                  <div className="self-stretch relative h-10 overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch relative leading-[20px]">Hint</div>
              <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch relative h-7 overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-col pt-0 px-0 pb-8 items-center justify-start gap-[16px] text-base text-seagreen font-typography-heading-small">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col py-0 pr-4 pl-2 items-start justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="w-8 flex flex-row p-1 box-border items-start justify-start">
                    <input
                      className="relative w-6 h-6"
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleCheckboxChange}
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
                  <div
                    className="self-stretch flex flex-row py-1 px-0 items-center justify-start gap-[4px] cursor-pointer"
                    onClick={onPersonalInfoDetail}
                  >
                    <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                      <input
                        type="checkbox"
                        name="option1"
                        checked={formData.option1}
                        onChange={handleCheckboxChange}
                        disabled={!formData.agreeToTerms}
                        className="relative w-4 h-4"
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
                      <input
                        className="relative w-4 h-4"
                        type="checkbox"
                        name="option2"
                        checked={formData.option2}
                        onChange={handleCheckboxChange}
                        disabled={!formData.agreeToTerms}
                        src="/iconsradio-button.svg"
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
                      src="/iconschevron-right.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row py-1 px-0 items-center justify-start gap-[4px]">
                    <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                      <input
                        className="relative w-4 h-4"
                        type="checkbox"
                        name="option3"
                        checked={formData.option3}
                        onChange={handleCheckboxChange}
                        src="/iconsradio-button.svg"
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
                      src="/iconschevron-right.svg"
                    />
                  </div>
                  <div className="self-stretch hidden flex-row py-1 px-0 items-center justify-start gap-[4px]">
                    <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="/iconsfavorite.svg"
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
                      src="/iconschevron-right.svg"
                    />
                  </div>
                  <div className="self-stretch hidden flex-row py-1 px-0 items-center justify-start gap-[4px]">
                    <div className="flex flex-row py-0.5 px-2 items-start justify-start">
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="/iconsfavorite.svg"
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
                      src="/iconsfavorite.svg"
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
                      src="/iconsfavorite.svg"
                    />
                    <div className="relative leading-[24px] font-medium">
                      Label
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/iconsfavorite.svg"
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
                      src="/iconsfavorite.svg"
                    />
                    <div className="relative leading-[24px] font-medium">
                      Label
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/iconsfavorite.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col py-0 px-4 items-center justify-center text-white">
                <div className="self-stretch rounded-2xl bg-seagreen flex flex-col py-4 px-0 items-center justify-center">
                  <button
                    type="submit"
                    className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px] bg-seagreen text-white"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/iconscafe.svg"
                    />
                    <div className="relative leading-[24px] font-medium">
                      30초 등록하고 커피 받기
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/iconsfavorite.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-col py-0 px-4 items-center justify-center">
                <div className="self-stretch rounded-2xl flex flex-col py-4 px-0 items-center justify-center">
                  <div className="overflow-hidden flex flex-row py-0 px-2 items-center justify-center gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/iconsfavorite.svg"
                    />
                    <div
                      className="relative leading-[24px] font-medium"
                      onClick={onClose}
                      style={{ cursor: "pointer" }}
                    >
                      다음에 가입할게요
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/iconsfavorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
