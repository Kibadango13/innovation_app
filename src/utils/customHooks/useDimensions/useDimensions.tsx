import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import { UseDimensions } from "./useDimensions.types";

const useDimensions: UseDimensions = container => {
  const headerHeight = useHeaderHeight() || 0;

  const [width, setWidth] = useState(Dimensions.get(container).width);
  const [height, setHeight] = useState(
    Dimensions.get(container).height - headerHeight
  );

  useEffect(() => {
    const resize = () => {
      setWidth(Dimensions.get(container).width);
      setHeight(Dimensions.get(container).height - headerHeight);
    };

    Dimensions.addEventListener("change", resize);

    return () => {
      Dimensions.removeEventListener("change", resize);
    };
  }, [container, headerHeight]);

  return { width, height };
};

export default useDimensions;
