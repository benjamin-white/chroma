import { describe, test, expect } from "vitest";
import rgbToNormal from "./rgbToNormal";

describe("RGB To Normal", () => {
  test("is correct for white", () => {
    expect(rgbToNormal("rgb(255, 255, 255)")).toEqual("[1, 1, 1]");
  });

  test("is correct for black", () => {
    expect(rgbToNormal("rgb(0, 0, 0)")).toEqual("[0, 0, 0]");
  });

  test("is insensitive to spaces", () => {
    expect(rgbToNormal("rgb(0,0,0)")).toEqual("[0, 0, 0]");
  });

  test("throws on an invalid input", () => {
    expect(() => rgbToNormal("")).toThrow("Invalid RGB string");
  });
});
