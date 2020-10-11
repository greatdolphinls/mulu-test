
import commonConstants from '~/constants/common';

exports.ROLE_TYPE_ENUM = [
  commonConstants.ROLE.ADMIN,
  commonConstants.ROLE.CONTACT,
  commonConstants.ROLE.AGENT
];
exports.ROLE_TYPE_DEFAULT = commonConstants.ROLE.CONTACT;

exports.GENDER_TYPE_ENUM = [
  commonConstants.GENDER.MALE,
  commonConstants.GENDER.FEMALE
];
exports.GENDER_TYPE_DEFAULT = commonConstants.GENDER.MALE;

exports.PROFESSION_TYPE_ENUM = [
  commonConstants.PROFESSION.CORPORATE_FINANCE,
  commonConstants.PROFESSION.COMMERCIAL_BANKING,
  commonConstants.PROFESSION.INVESTMENT_BANKING,
  commonConstants.PROFESSION.HEDGE_FUNDS,
  commonConstants.PROFESSION.FINANCIAL_PLANNING
];
exports.PROFESSION_TYPE_DEFAULT = commonConstants.PROFESSION.CORPORATE_FINANCE;