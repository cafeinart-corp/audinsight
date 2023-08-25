import Size56px from "./Size56px";
import LogoHorizontal from "./LogoHorizontal";
import ClassLabelSizeSmall from "./ClassLabelSizeSmall";

function Footer() {
  return (
    <div
      className="self-stretch bg-whitesmoke flex flex-col items-center justify-start"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <Size56px
        size56pxWidth="unset"
        size56pxPosition="unset"
        size56pxAlignSelf="stretch"
        size56pxZIndex="unset"
        spacerBackgroundColor="unset"
        spacerHeight="56px"
      />
      <LogoHorizontal
        logoHorizontalLogoHorizon="/logohorizontal1.svg"
        logoHorizontalIconWidth="91px"
        logoHorizontalIconHeight="16px"
        logoHorizontalIconFlexShrink="0"
        logoHorizontalIconMixBlendMode="unset"
      />
      <Size56px
        size56pxWidth="unset"
        size56pxPosition="unset"
        size56pxAlignSelf="stretch"
        size56pxZIndex="unset"
        spacerBackgroundColor="unset"
        spacerHeight="12px"
      />
      <ClassLabelSizeSmall
        showWereTheLargest={false}
        classLabelSizeSmallPosition="unset"
        classLabelSizeSmallAlignSelf="stretch"
        classLabelSizeSmallPadding="0px 16px"
        classLabelSizeSmallBoxSizing="border-box"
        classLabelSizeSmallAlignItems="flex-start"
        textColor="#5e5e5e"
        textTextAlign="center"
        textFontSize="14px"
        textLineHeight="20px"
        textFontWeight="500"
        textFontFamily="Nuance"
        wereTheLargestMargin="unset"
        wereTheLargestAlignSelf="stretch"
        wereTheLargestOverflow="hidden"
        wereTheLargestFlexDirection="column"
        wereTheLargestAlignItems="flex-start"
        wereTheLargestJustifyContent="flex-start"
        prop1={"Powered by Audinsight"}
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

export default Footer;
