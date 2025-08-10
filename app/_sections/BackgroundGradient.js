"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { useMediaQuery } from "react-responsive";

const query =
  "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23256580&color2=%23000058&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.4&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=plane&uAmplitude=1.3&uDensity=1.4&uFrequency=0&uSpeed=0.15&uStrength=2.8&uTime=8&wireframe=false&zoomOut=false";

const mobileQuery =
  "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%2300001e&color2=%2300001c&color3=%23000049&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.4&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=plane&uAmplitude=1.3&uDensity=1.4&uFrequency=0&uSpeed=0.1&uStrength=2.8&uTime=8&wireframe=false&zoomOut=false";

function BackgroundGradient() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="animated-bg fixed top-0 left-0 -z-20 h-screen w-screen">
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
          urlString={isMobile ? mobileQuery : query}
        />
      </ShaderGradientCanvas>
      <div className="absolute top-[50%] left-0 z-10 h-40 w-60 -translate-y-1/2">
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
        ></ShaderGradientCanvas>
      </div>
    </div>
  );
}

export default BackgroundGradient;
