"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if value is real number. Supports Number object.
 * @param {any} num - value to check
 * @return {boolean} - returns true if value is true number
 */
function isNumberStrict(num) {
    var check = num && typeof num.valueOf === 'function' ? num.valueOf() : num;
    return typeof check === 'number' && Number.isFinite(check);
}
exports.default = isNumberStrict;
