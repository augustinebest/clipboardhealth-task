const { generateHash } = require("./utils/generateHash");

/**
 * Returns a deterministic partition key for the given event.
 * @param {object} event - The event to generate a partition key for.
 * @returns {string} The partition key.
 */
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event.partitionKey;

  if (!candidate) {
    candidate = generateHash(event);
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = generateHash(candidate);
  }

  return candidate;
};
