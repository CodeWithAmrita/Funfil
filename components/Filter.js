import React from "react";
import { Image, View } from "react-native";

const Filter = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition,
    noseBasePosition
  },
  source,
  width,
  height,
  left,
  right,
  top
}) => {
  const filterWidth = faceWidth * width;
  const filterHeight = faceHeight * height;

  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
        (rightEyePosition.x - leftEyePosition.x)
    )
  ) => (angleRad * 180) / Math.PI;

  return (
    <View
      style={{
        position: "absolute",
        left: leftEyePosition.x - filterWidth * left,
        right: rightEyePosition.x - filterWidth * right,
        top: noseBasePosition.y - filterHeight * top
      }}
    >
      <Image
        source={source}
        style={{
          width: filterWidth,
          height: filterHeight,
          resizeMode: "contain",
          transform: [{ rotate: `${transformAngle()}deg` }]
        }}
      />
    </View>
  );
};

export default Filter;
