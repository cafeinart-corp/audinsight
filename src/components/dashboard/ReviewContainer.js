const ReviewContainer = ({ prop, prop1, prop2 }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-center text-13xl text-black font-typography-heading-large">
      <b className="self-stretch relative leading-[40px]">
        <p className="m-0">{prop}</p>
        <p className="m-0">{prop1}</p>
        <p className="m-0">{prop2}</p>
      </b>
      <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
        <div className="self-stretch relative h-5 overflow-hidden shrink-0" />
      </div>
    </div>
  );
};

export default ReviewContainer;
