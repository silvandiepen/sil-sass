"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKey = exports.uppercased = void 0;
const uppercased = (str) => str.replaceAll("-", "_").toUpperCase();
exports.uppercased = uppercased;
const getKey = (haystack, needle) => {
    let index = 0;
    Object.keys(haystack).forEach((key, idx) => {
        if (key == needle) {
            index = idx;
        }
    });
    return Object.values(haystack)[index];
};
exports.getKey = getKey;
//# sourceMappingURL=helpers.js.map