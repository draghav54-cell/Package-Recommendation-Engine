/**
 * ==========================================================
 * Config.gs
 * ----------------------------------------------------------
 * Package Recommendation Engine
 * Central configuration file.
 * ==========================================================
 */

const CONFIG = Object.freeze({

  APP: {
    NAME: "Package Recommendation Engine",
    VERSION: "4.0.0"
  },

  SHEETS: {

    TEST_MASTER: "Test_Master",

    PACKAGE_MASTER: "Package_Master",

    PACKAGE_TESTS: "Package_Tests",

    PRESCRIPTION: "Prescription",

    FINAL_RECOMMENDATION: "Final_Recommendation",

    VENDOR_LIST: "Vendor_List"

  },

  PACKAGE_MASTER: {

    PACKAGE_ID: "Package_ID",

    PACKAGE_NAME: "Package_Name",

    VENDOR: "Vendor",

    MRP: "MRP",

    DOCTOR_RATE: "Doctor_Rate"

  },

  PACKAGE_TESTS: {

    PACKAGE_NAME: "Package_Name",

    TEST_NAME: "Test_Name"

  },

  TEST_MASTER: {

    TEST_NAME: "Test_Name"

  },

  PRESCRIPTION: {

    COLUMN: 1,

    START_ROW: 2

  },

  OUTPUT: {

    START_ROW: 2,

    HEADERS: [

      "Rank",

      "Package Name",

      "Vendor",

      "Matched Tests",

      "Missing Tests",

      "Extra Tests",

      "Coverage %",

      "Doctor Rate",

      "MRP"

    ]

  },

  SETTINGS: {

    DECIMAL_PLACES: 2,

    INCLUDE_ZERO_MATCH: false,

    IGNORE_CASE: true

  },

  MESSAGE: {

    SUCCESS: "Package recommendation completed successfully.",

    NO_TEST_SELECTED: "Please select at least one test in the Prescription sheet.",

    NO_PACKAGE_FOUND: "No suitable package found.",

    INVALID_STRUCTURE: "Spreadsheet structure is invalid."

  }

});
