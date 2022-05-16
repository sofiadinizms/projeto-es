// import React from "react";
// import { StyleSheet } from "react-native";
// import { View } from "./styles";

// type HeadProps = {
//   headPosition?: any,
//   headSize?: any,
// }

// const Head: React.FC<HeadProps> = ({
//   headPosition,
//   headSize
// }) => {
//   return (
//     <View
//       style={{
//         width: headSize ? headSize : 15
//         height: headSize ? headSize : 15
//         backgroundColor: "red"
//         position: "absolute"
//         left: headPosition[0] * headSize
//         top: headPosition[1] * headSize
//       }}
//     />
//   );
// };

// export default Head;

import React from "react";
import { View } from "react-native";
export default function Head({ position, size }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: "red",
        position: "absolute",
        left: position[0] * size,
        top: position[1] * size,
      }}
    ></View>
  );
} 