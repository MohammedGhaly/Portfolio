"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

function HeroGradient() {
  return (
    <ShaderGradientCanvas
      lazyLoad={false}
      key={"hero-gradient1"}
      style={{
        width: "101%",
        height: "101%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.8&cAzimuthAngle=180&cDistance=6&cPolarAngle=120&cameraZoom=1&color1=%23e66131&color2=%234c0aa8&color3=%2331e3d7&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.3&positionX=0.1&positionY=0.1&positionZ=-1.6&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=0.6&uFrequency=5.5&uSpeed=0.11&uStrength=3.2&uTime=0&wireframe=false&zoomOut=false"
      />
    </ShaderGradientCanvas>
  );
}

export default HeroGradient;
