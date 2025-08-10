import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

function Gradient({ urlString }) {
  return (
    <ShaderGradientCanvas
      lazyLoad={false}
      style={{
        width: "101%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="query"
        urlString={urlString}
        renderProps={{
          antialias: false,
          powerPreference: "high-performance",
        }}
      />
    </ShaderGradientCanvas>
  );
}

export default Gradient;
