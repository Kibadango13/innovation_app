// useDimensions hook types and interfaces

export type UseDimensions = (
  container: ContainerOptions,
  offsets?: {
    width?: number;
    height?: number;
  }
) => UseDimensionsReturn;

export type ContainerOptions = "screen" | "window";

interface UseDimensionsReturn {
  width: number;
  height: number;
}
