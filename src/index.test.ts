import { encode, decode } from "./index";

describe("encode and decode functions", () => {
  test("encode should only return NaN values", () => {
    const encodedSimple = encode(42);
    expect(Array.isArray(encodedSimple)).toBe(true);
    expect(encodedSimple.length).toEqual(1);
    expect(encodedSimple[0]).toBeNaN();

    const encodedComplex = encode({ name: "John", age: 100, active: true });
    expect(Array.isArray(encodedComplex)).toBe(true);
    expect(encodedComplex.length).toBeGreaterThan(0);
    for (const value of encodedComplex) {
      expect(value).toBeNaN();
    }
  });

  test("encode should be reversible with decode", () => {
    const testObject = { name: "John", age: 100, active: true };
    const encoded = encode(testObject);
    const decoded = decode(encoded);
    expect(decoded).toEqual(testObject);
  });

  test("should survive mathematical operations", () => {
    const testObject = { name: "John", age: 100, active: true };
    const encoded = encode(testObject);
    const encodedMultiplied = encoded.map((value) => value * 42);
    const decoded = decode(encodedMultiplied);
    expect(decoded).toEqual(testObject);
  });

  test("should throw an error when decoding an empty array", () => {
    expect(() => {
      decode([]);
    }).toThrow("Input must contain at least one Na(a)N");
  });

  test("should throw an error when provided with non-stuffed NaaNs", () => {
    expect(() => {
      decode([NaN, NaN, NaN]);
    }).toThrow("Input Na(a)Ns are empty, stuffing must have fallen out");
  });
});
