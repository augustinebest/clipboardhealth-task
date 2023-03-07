jest.mock("./utils/generateHash", () => ({
  generateHash: jest.fn(),
}));

const { deterministicPartitionKey } = require("./dpk");
const { generateHash } = require("./utils/generateHash");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a partitionKey when given an input with a partition key", () => {
    const event = { partitionKey: "123" };
    expect(deterministicPartitionKey(event)).toBe(event.partitionKey);
  });

  it("returns hash when given an input without a parition key", () => {
    const event = { type: "some event" };
    const hash = "test-partition-key";
    generateHash.mockReturnValueOnce(hash);
    expect(deterministicPartitionKey(event)).toBe(hash);
    expect(generateHash).toBeCalledTimes(1);
    expect(generateHash).toBeCalledWith(event);
  });
});
