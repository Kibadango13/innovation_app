import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import { UseDimensions } from "./useDimensions.types";
import { defaultOffsets } from "./useDimensions.helpers";

const useDimensions: UseDimensions = (container, offsets = defaultOffsets) => {
  const offsetWidth = offsets.width ?? 0;
  const offsetHeight = offsets.height ?? 0;

  const [width, setWidth] = useState(
    Dimensions.get(container).width - offsetWidth
  );
  const [height, setHeight] = useState(
    Dimensions.get(container).height - offsetHeight
  );

  useEffect(() => {
    const resize = () => {
      setWidth(Dimensions.get(container).width - offsetWidth);
      setHeight(Dimensions.get(container).height - offsetHeight);
    };

    Dimensions.addEventListener("change", resize);

    return () => {
      Dimensions.removeEventListener("change", resize);
    };
  }, [container, offsetWidth, offsetHeight]);

  return { width, height };
};

export default useDimensions;
