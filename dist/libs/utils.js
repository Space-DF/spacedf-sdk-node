"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rstripBase64 = exports.uuid4 = exports.isObj = exports.toSHA256 = exports.toBase64 = void 0;
const error_1 = require("../error.js");
const node_crypto_1 = require("node:crypto");
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
const toBase64 = (str) => {
    if (!str)
        return '';
    if (typeof Buffer !== 'undefined') {
        return Buffer.from(str).toString('base64');
    }
    if (typeof btoa !== 'undefined') {
        return btoa(str);
    }
    throw new error_1.SpaceDFError('Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined');
};
exports.toBase64 = toBase64;
/**
 * Generates a SHA-256 hash for the provided data, compatible with both Node.js and browser environments.
 *
 * @param data - The data to hash, either as a string or a binary-like object.
 * @returns A promise that resolves to the SHA-256 hash as an ArrayBuffer (in browser) or Buffer (in Node.js).
 */
const toSHA256 = async (data) => {
    const encodedData = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    // @ts-ignore
    if (typeof globalThis !== 'undefined' && typeof globalThis.crypto !== 'undefined') {
        // @ts-ignore
        const hash = await globalThis.crypto.subtle.digest('SHA-256', encodedData);
        return hash;
    }
    return (0, node_crypto_1.createHash)('sha256').update(encodedData).digest();
};
exports.toSHA256 = toSHA256;
function isObj(obj) {
    return obj != null && typeof obj === 'object' && !Array.isArray(obj);
}
exports.isObj = isObj;
/**
 * https://stackoverflow.com/a/2117523
 */
const uuid4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
exports.uuid4 = uuid4;
const rstripBase64 = (base64) => base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
exports.rstripBase64 = rstripBase64;
//# sourceMappingURL=utils.js.map