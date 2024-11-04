                              
                              
                              
                              
/**
 * Converts a given string to its Base64 encoded representation.
 *
 * @param {string | null | undefined} str - The input string to be encoded in Base64. If the input is `null` or `undefined`, an empty string is returned.
 *
 * @returns {string} - The Base64 encoded string. If the input is invalid (null or undefined), an empty string is returned.
 *
 * This function works in both Node.js and browser environments:
 * - In **Node.js**, it uses `Buffer.from()` to convert the string into Base64.
 * - In **browser environments**, it uses the `btoa()` function to generate the Base64 encoded string.
 *
 * If neither `Buffer` (Node.js) nor `btoa` (browser) are available, it throws a custom `SpaceDFError`.
 *
 * @throws {SpaceDFError} - Throws an error if neither `Buffer` nor `btoa` are available for Base64 encoding.
 */
export declare const toBase64: (str: string | null | undefined) => string;
/**
 * Generates a SHA-256 hash for the provided data, compatible with both Node.js and browser environments.
 *
 * @param data - The data to hash, either as a string or a binary-like object.
 * @returns A promise that resolves to the SHA-256 hash as an ArrayBuffer (in browser) or Buffer (in Node.js).
 */
export declare const toSHA256: (data: string | NodeJS.ArrayBufferView) => Promise<any>;
export declare function isObj(obj: unknown): obj is Record<string, unknown>;
/**
 * https://stackoverflow.com/a/2117523
 */
export declare const uuid4: () => string;
export declare const rstripBase64: (base64: string) => string;
//# sourceMappingURL=utils.d.ts.map