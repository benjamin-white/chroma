const rgbToNormal = (rgbString: string) => {
  const value = rgbString.match(/rgb\((.*)\)/);
  if (!value) throw new Error("Invalid RGB string");
  const values = value[1].replace(", ", ",").split(",");
  return `[${+values[0] / 255}, ${+values[1] / 255}, ${+values[2] / 255}]`;
};

export default rgbToNormal;
