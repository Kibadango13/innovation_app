// useDimensions hook types and interfaces

export type UseDimensions = (
  container: ContainerOptions
) => UseDimensionsReturn;

export type ContainerOptions = "screen" | "window";

interface UseDimensionsReturn {
  width: number;
  height: number;
}
