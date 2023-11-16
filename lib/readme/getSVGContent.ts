import { startCase } from "lodash";

// prettier-ignore
const getSVGContent = (
  colorValues: [string, string][],
  height: number,
  blockHeight: number
) => `<svg
  xmlns="http://www.w3.org/2000/svg"
  width='100%'
  height="${height}px"
  style="font:inherit">
  <style>text {font: 400 14px sans-serif}</style>
  ${colorValues.map(([key, color], index) =>
  `<rect x='0' y="${
    blockHeight * index
  }" width="100%" height="${blockHeight}" fill="${color}"></rect>
  <text
    x="16"
    y="${blockHeight * index + blockHeight * 0.5}"
    dominant-baseline="middle"
  >${startCase(key)}: ${color}</text>`
  )
  .join("\n    ")}
</svg>
`;

export default getSVGContent;
