import { useMemo } from "react";

const LogoHorizontal = ({
  logoHorizontalLogoHorizon,
  logoHorizontalIconWidth,
  logoHorizontalIconHeight,
  logoHorizontalIconFlexShrink,
  logoHorizontalIconMixBlendMode,
}) => {
  const logoHorizontalIconStyle = useMemo(() => {
    return {
      width: logoHorizontalIconWidth,
      height: logoHorizontalIconHeight,
      flexShrink: logoHorizontalIconFlexShrink,
      mixBlendMode: logoHorizontalIconMixBlendMode,
    };
  }, [
    logoHorizontalIconWidth,
    logoHorizontalIconHeight,
    logoHorizontalIconFlexShrink,
    logoHorizontalIconMixBlendMode,
  ]);

  return (
    <img
      className="relative w-[390px] h-[72px] overflow-hidden"
      alt=""
      src={logoHorizontalLogoHorizon}
      style={logoHorizontalIconStyle}
    />
  );
};

export default LogoHorizontal;
