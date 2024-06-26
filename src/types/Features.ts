export enum FEATURES {
  IS_PROFILE_TABS_PHASE_2 = "isProfileTabsPhase2",
  IS_WALLET_CREDIT_PHASE_2 = "isWalletCreditPhase2",
  IS_PACKAGE_PROMOTION_PHASE_2 = "isPackagePromotionPhase2",
  IS_LANGUAGE_DROPDOWN_PHASE_3 = "isLanguageDropdonPhase2",
  IS_MONTHLY_GOLD_PLAN_ONLY = "isMonthlyGoldPlanOnly",
  IS_RESTRICTED_REGION = "isRestrictedRegion",
}

export type FEATURES_ENV = {
  [NEXT_PUBLIC_FEATURE_IS_PROFILE_TABS_PHASE_2: string]: string;
  NEXT_PUBLIC_FEATURE_IS_WALLET_CREDIT_PHASE_2: string;
  NEXT_PUBLIC_FEATURE_IS_PACKAGE_PROMOTION_PHASE_2: string;
  NEXT_PUBLIC_FEATURE_IS_LANGUAGE_DROPDOWN_PHASE_3: string;
  NEXT_PUBLIC_FEATURE_IS_MONTHLY_GOLD_PLAN_ONLY: string;
  NEXT_PUBLIC_FEATURE_IS_RESTRICTED_REGION: string;
};
