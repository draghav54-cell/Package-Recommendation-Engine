/**
 * ==========================================================
 * Package Recommendation Engine
 * ----------------------------------------------------------
 * File: Config.gs
 * Version: 3.0.0
 *
 * Central configuration file.
 * This file contains NO business logic.
 * ==========================================================
 */

const CONFIG = Object.freeze({

  APP: {

    NAME: "Package Recommendation Engine",

    VERSION: "3.0.0"

  },

  SHEETS: {

    TEST_MASTER: "Test_Master",

    PACKAGE_MASTER: "Package_Master",

    PACKAGE_TESTS: "Package_Tests",

    PRESCRIPTION: "Prescription",

    FINAL_RECOMMENDATION: "Final_Recommendation",

    VENDOR_LIST: "Vendor_List"

  },

  COLUMNS: {

    TEST_MASTER: {

      TEST_NAME: "Test_Name"

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

    PRESCRIPTION: {

      SELECTED_TESTS: "Selected Tests"

    }

  },

  RECOMMENDATION: {

    COVERAGE_OPTION: "A",

    DECIMAL_PLACES: 2,

    INCLUDE_ZERO_MATCH: false

  },

  OUTPUT: {

    FREEZE_HEADER: true,

    AUTO_RESIZE_COLUMNS: true,

    WRAP_TEXT: true

  },

  SORT: {

    MATCHED_DESC: true,

    COVERAGE_DESC: true,

    EXTRA_ASC: true,

    DOCTOR_RATE_ASC: true,

    PACKAGE_NAME_ASC: true

  },

  MESSAGE: {

    NO_TEST_SELECTED:
      "Please select at least one test.",

    NO_PACKAGE_FOUND:
      "No matching package found.",

    SUCCESS:
      "Package recommendation completed successfully."

  }

});
