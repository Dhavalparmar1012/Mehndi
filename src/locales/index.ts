import * as enCommon from "./en/common.json";
import * as spCommon from "./sp/common.json";
import * as enHome from "./en/home.json";
import * as spHome from "./sp/home.json";
import * as enAbout from "./en/about.json";
import * as spAbout from "./sp/about.json";
import * as enAffiliate from "./en/affiliate.json";
import * as spAffiliate from "./sp/affiliate.json";
import * as enContactUs from "./en/contactUs.json";
import * as spContactUs from "./sp/contactUs.json";
import * as enCookieStatement from "./en/cookieStatement.json";
import * as spCookieStatement from "./sp/cookieStatement.json";
import * as enForgotPassword from "./en/forgotPassword.json";
import * as spForgotPassword from "./sp/forgotPassword.json";
import * as enLogin from "./en/login.json";
import * as spLogin from "./sp/login.json";
import * as enMainLayout from "./en/mainLayout.json";
import * as spMainLayout from "./sp/mainLayout.json";
import * as enMobileVerification from "./en/mobileVerification.json";
import * as spMobileVerification from "./sp/mobileVerification.json";
import * as enPayment from "./en/payment.json";
import * as spPayment from "./sp/payment.json";
import * as enPrivacyStatement from "./en/privacyStatement.json";
import * as spPrivacyStatement from "./sp/privacyStatement.json";
import * as enProfile from "./en/profile.json";
import * as spProfile from "./sp/profile.json";
import * as enResetPassword from "./en/resetPassword.json";
import * as spResetPassword from "./sp/resetPassword.json";
import * as enSignup from "./en/signup.json";
import * as spSignup from "./sp/signup.json";
import * as enSubmittedForReview from "./en/submittedForReview.json";
import * as spSubmittedForReview from "./sp/submittedForReview.json";
import * as enTermsAndCondition from "./en/termsAndCondition.json";
import * as spTermsAndCondition from "./sp/termsAndCondition.json";
import * as enVerification from "./en/verification.json";
import * as spVerification from "./sp/verification.json";
import * as enAffiliateProgram from "./en/affiliateProgram.json";
import * as spAffiliateProgram from "./sp/affiliateProgram.json";
import * as enFaq from "./en/faq.json";
import * as spFaq from "./sp/faq.json";
import * as enDetails from "./en/details.json";
import * as spDetails from "./sp/details.json";
import * as enMembership from "./en/membership.json";
import * as spMembership from "./sp/membership.json";
import * as enPhotoshoot from "./en/photoshoot.json";
import * as spPhotoshoot from "./sp/photoshoot.json";
import * as enCredits from "./en/credits.json";
import * as spCredits from "./sp/credits.json";
import * as enBilling from "./en/billing.json";
import * as spBilling from "./sp/billing.json";

import { JSON_TYPES } from "@/constants/jsonConstants";
import { LANGUAGES_TYPES } from "@/constants/languageConstants";

export type LanguageKeys = {
  [key: string]: string;
};

export const getModule = (lang: string, module: string) => {
  switch (module) {
    case JSON_TYPES.VERIFICATION:
      return (lang === LANGUAGES_TYPES.NL
        ? enVerification
        : lang === LANGUAGES_TYPES.SP
        ? spVerification
        : enVerification) as unknown as LanguageKeys;

    case JSON_TYPES.PAYMENT:
      return (lang === LANGUAGES_TYPES.NL
        ? enPayment
        : lang === LANGUAGES_TYPES.SP
        ? spPayment
        : enPayment) as unknown as LanguageKeys;

    case JSON_TYPES.MAIN_LAYOUT:
      return (lang === LANGUAGES_TYPES.NL
        ? enMainLayout
        : lang === LANGUAGES_TYPES.SP
        ? spMainLayout
        : enMainLayout) as unknown as LanguageKeys;

    case JSON_TYPES.COMMON:
      return (lang === LANGUAGES_TYPES.NL
        ? spCommon
        : lang === LANGUAGES_TYPES.SP
        ? spCommon
        : enCommon) as unknown as LanguageKeys;

    case JSON_TYPES.SIGNUP:
      return (lang === LANGUAGES_TYPES.NL
        ? enSignup
        : lang === LANGUAGES_TYPES.SP
        ? spSignup
        : enSignup) as unknown as LanguageKeys;

    case JSON_TYPES.LOGIN:
      return (lang === LANGUAGES_TYPES.NL
        ? enLogin
        : lang === LANGUAGES_TYPES.SP
        ? spLogin
        : enLogin) as unknown as LanguageKeys;

    case JSON_TYPES.FORGOT_PASSWORD:
      return (lang === LANGUAGES_TYPES.NL
        ? enForgotPassword
        : lang === LANGUAGES_TYPES.SP
        ? spForgotPassword
        : enForgotPassword) as unknown as LanguageKeys;

    case JSON_TYPES.RESET_PASSWORD:
      return (lang === LANGUAGES_TYPES.NL
        ? enResetPassword
        : lang === LANGUAGES_TYPES.SP
        ? spResetPassword
        : enResetPassword) as unknown as LanguageKeys;

    case JSON_TYPES.ABOUT:
      return (lang === LANGUAGES_TYPES.NL
        ? enAbout
        : lang === LANGUAGES_TYPES.SP
        ? spAbout
        : enAbout) as unknown as LanguageKeys;

    case JSON_TYPES.PROFILE:
      return (lang === LANGUAGES_TYPES.NL
        ? enProfile
        : lang === LANGUAGES_TYPES.SP
        ? spProfile
        : enProfile) as unknown as LanguageKeys;

    case JSON_TYPES.TERMS_AND_CONDITION:
      return (lang === LANGUAGES_TYPES.NL
        ? enTermsAndCondition
        : lang === LANGUAGES_TYPES.SP
        ? spTermsAndCondition
        : enTermsAndCondition) as unknown as LanguageKeys;

    case JSON_TYPES.PRIVACY_STATEMENT:
      return (lang === LANGUAGES_TYPES.NL
        ? enPrivacyStatement
        : lang === LANGUAGES_TYPES.SP
        ? spPrivacyStatement
        : enPrivacyStatement) as unknown as LanguageKeys;

    case JSON_TYPES.MOBILE_VERIFICATION:
      return (lang === LANGUAGES_TYPES.NL
        ? enMobileVerification
        : lang === LANGUAGES_TYPES.SP
        ? spMobileVerification
        : enMobileVerification) as unknown as LanguageKeys;

    case JSON_TYPES.HOME:
      return (lang === LANGUAGES_TYPES.NL
        ? enHome
        : lang === LANGUAGES_TYPES.SP
        ? spHome
        : enHome) as unknown as LanguageKeys;

    case JSON_TYPES.SUBMITTED_FOR_REVIEW:
      return (lang === LANGUAGES_TYPES.NL
        ? enSubmittedForReview
        : lang === LANGUAGES_TYPES.SP
        ? spSubmittedForReview
        : enSubmittedForReview) as unknown as LanguageKeys;

    case JSON_TYPES.COOKIE_STATEMENT:
      return (lang === LANGUAGES_TYPES.NL
        ? enCookieStatement
        : lang === LANGUAGES_TYPES.SP
        ? spCookieStatement
        : enCookieStatement) as unknown as LanguageKeys;

    case JSON_TYPES.AFFILIATE:
      return (lang === LANGUAGES_TYPES.NL
        ? enAffiliate
        : lang === LANGUAGES_TYPES.SP
        ? spAffiliate
        : enAffiliate) as unknown as LanguageKeys;

    case JSON_TYPES.CONTACT_US:
      return (lang === LANGUAGES_TYPES.NL
        ? enContactUs
        : lang === LANGUAGES_TYPES.SP
        ? spContactUs
        : enContactUs) as unknown as LanguageKeys;

    case JSON_TYPES.AFFILIATE_PROGRAM:
      return (lang === LANGUAGES_TYPES.NL
        ? enAffiliateProgram
        : lang === LANGUAGES_TYPES.SP
        ? spAffiliateProgram
        : enAffiliateProgram) as unknown as LanguageKeys;

    case JSON_TYPES.FAQ:
      return (lang === LANGUAGES_TYPES.NL
        ? enFaq
        : lang === LANGUAGES_TYPES.SP
        ? spFaq
        : enFaq) as unknown as LanguageKeys;

    case JSON_TYPES.DETAILS:
      return (lang === LANGUAGES_TYPES.NL
        ? enDetails
        : lang === LANGUAGES_TYPES.SP
        ? spDetails
        : enDetails) as unknown as LanguageKeys;

    case JSON_TYPES.MEMBERSHIP:
      return (lang === LANGUAGES_TYPES.NL
        ? enMembership
        : lang === LANGUAGES_TYPES.SP
        ? spMembership
        : enMembership) as unknown as LanguageKeys;

    case JSON_TYPES.PHOTOSHOOT:
      return (lang === LANGUAGES_TYPES.NL
        ? enPhotoshoot
        : lang === LANGUAGES_TYPES.SP
        ? spPhotoshoot
        : enPhotoshoot) as unknown as LanguageKeys;

    case JSON_TYPES.CREDITS:
      return (lang === LANGUAGES_TYPES.NL
        ? enCredits
        : lang === LANGUAGES_TYPES.SP
        ? spCredits
        : enCredits) as unknown as LanguageKeys;

    case JSON_TYPES.BILLING:
      return (lang === LANGUAGES_TYPES.NL
        ? enBilling
        : lang === LANGUAGES_TYPES.SP
        ? spBilling
        : enBilling) as unknown as LanguageKeys;

    default:
      return {} as LanguageKeys;
  }
};

export const getLanguageKey = (lang: string, module: string, key: string) => {
  const moduleData = getModule(lang, module);
  if (!module) return key;

  return moduleData[key] || key || "";
};
