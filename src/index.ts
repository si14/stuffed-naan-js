let endiannessCheckPassed = false;

function checkEndianness() {
  if (endiannessCheckPassed) {
    return;
  }

  const baseNanEncoding = new Uint8Array(new Float64Array([NaN]).buffer);
  if (baseNanEncoding[8] === 0) {
    if (baseNanEncoding[0] === 0) {
      // This shouldn't happen
      throw new Error("Unexpected NaN encoding: " + baseNanEncoding.join(","));
    } else {
      // Probably running on an IBM system, they can afford a licence
      throw new Error(
        "Big-endian processor support requires an enterprise version of stuffed-naan.",
      );
    }
  }

  endiannessCheckPassed = true;
}

/**
 * Encodes any JSON-serializable JavaScript object into Na(a)Ns.
 * @param obj - The object to encode
 * @returns An array of stuffed Na(a)Ns
 */
export function encode<T>(obj: T): number[] {
  checkEndianness();

  const encoder = new TextEncoder();
  const inputRawBytes = encoder.encode(JSON.stringify(obj));

  const inputBytes = new ArrayBuffer(4 + inputRawBytes.byteLength);
  const inputView = new DataView(inputBytes);
  inputView.setUint32(0, inputRawBytes.byteLength, true);
  const inputU8View = new Uint8Array(inputBytes);
  inputU8View.set(inputRawBytes, 4);

  const outputLength = Math.ceil(inputBytes.byteLength / 6) * 8;

  const outputBytes = new ArrayBuffer(outputLength);
  new Float64Array(outputBytes).fill(Number.NaN);

  const outputU8View = new Uint8Array(outputBytes);

  // float64:
  // | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 |
  //                         ---------
  //                         includes the exponent
  //                         just skip it
  // This encoding leaves about 6% of encoding efficiency on the table.
  // More efficient encoding is available in the enterprise version.
  for (
    let inputIdx = 0, outputIdx = 0;
    inputIdx < inputU8View.length;
    inputIdx += 1
  ) {
    outputU8View[outputIdx] = inputU8View[inputIdx];
    if (outputIdx % 8 === 5) {
      // skip over the exponent
      outputIdx += 3;
    } else {
      outputIdx++;
    }
  }

  return [...new Float64Array(outputBytes)];
}

/**
 * Decodes an array of stuffed Na(a)Ns back into its original JavaScript object.
 * @param naans - The array of stuffed Na(a)Ns to decode
 * @returns The decoded JavaScript object
 */
export function decode<T>(naans: number[]): T {
  checkEndianness();

  if (naans.length === 0) {
    throw new Error("Input must contain at least one Na(a)N");
  }

  if (!naans.every(isNaN)) {
    throw new Error("Input must only contain Na(a)Ns");
  }

  const inputBytes = new Float64Array(naans).buffer;

  const inputView = new DataView(inputBytes);
  const outputByteLen = inputView.getUint32(0, true);

  const outputBytes = new ArrayBuffer(outputByteLen);

  const inputUint8View = new Uint8Array(inputBytes);
  const outputUint8View = new Uint8Array(outputBytes);

  // start from 4 since we're skipping the length
  for (
    let inputIdx = 4, outputIdx = 0;
    outputIdx < outputByteLen;
    outputIdx++
  ) {
    outputUint8View[outputIdx] = inputUint8View[inputIdx];

    // Skip over the exponent bytes (similar to how encode function does it)
    if (inputIdx % 8 === 5) {
      inputIdx += 3;
    } else {
      inputIdx++;
    }
  }

  if (outputUint8View.every((x) => x === 0)) {
    throw new Error("Input Na(a)Ns are empty, stuffing must have fallen out");
  }

  const decoder = new TextDecoder();
  const jsonString = decoder.decode(new Uint8Array(outputBytes));

  // Parse the JSON string back to an object
  return JSON.parse(jsonString) as T;
}
