/**
 * ==========================================================
 * Utilities.gs
 * ----------------------------------------------------------
 * Common helper functions used throughout the project.
 * ==========================================================
 */

const Utils = (() => {

  function isBlank(value) {
    return value === null ||
           value === undefined ||
           String(value).trim() === "";
  }

  function toString(value) {
    return isBlank(value) ? "" : String(value).trim();
  }

  function normalize(value) {
    return CONFIG.SETTINGS.IGNORE_CASE
      ? toString(value).toUpperCase()
      : toString(value);
  }

  function toNumber(value) {
    if (isBlank(value)) return 0;

    const n = Number(value);

    return isNaN(n) ? 0 : n;
  }

  function round(value, decimals) {

    const factor = Math.pow(10, decimals);

    return Math.round(value * factor) / factor;

  }

  function percentage(part, total) {

    if (total === 0) return 0;

    return round(
      (part / total) * 100,
      CONFIG.SETTINGS.DECIMAL_PLACES
    );

  }

  function unique(array) {

    return [...new Set(array)];

  }

  function sortAscending(array) {

    return array.slice().sort();

  }

  function normalizeArray(array) {

    return unique(
      array
        .map(normalize)
        .filter(v => v !== "")
    );

  }

  function buildLookup(array) {

    const lookup = {};

    array.forEach(item => {

      lookup[normalize(item)] = true;

    });

    return lookup;

  }

  function requireSheet(ss, sheetName) {

    const sheet = ss.getSheetByName(sheetName);

    if (!sheet) {

      throw new Error(
        "Missing sheet: " + sheetName
      );

    }

    return sheet;

  }

  function getHeaderMap(headers) {

    const map = {};

    headers.forEach((header, index) => {

      map[toString(header)] = index;

    });

    return map;

  }

  function requireHeader(map, headerName) {

    if (!(headerName in map)) {

      throw new Error(
        "Missing column: " + headerName
      );

    }

    return map[headerName];

  }

  return {

    isBlank,

    toString,

    normalize,

    toNumber,

    round,

    percentage,

    unique,

    sortAscending,

    normalizeArray,

    buildLookup,

    requireSheet,

    getHeaderMap,

    requireHeader

  };

})();
