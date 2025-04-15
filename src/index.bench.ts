import { encode } from "./index";
import { benchmarkSuite } from "../node_modules/jest-bench/dist/index.js";

const testData = {
  name: "John",
  age: 100,
  active: true,
  address: { street: "123 Main St", city: "Anytown", state: "NY", zip: 12345 },
};


const testDataArray = Array(1000).fill(0).map(() => JSON.parse(JSON.stringify(testData)));


benchmarkSuite("sample", {
  setup() {},

  teardown() {},

  ["stuffed-naan encoding"]: () => {
    encode(testDataArray);
  },
});
