import { FeatureEnv } from "@/constants/featureEnv";
import { FEATURES } from "@/types/Features";

// Return bool value as per its valid or not
export const checkFeatureStatus = (key: string) => {
  if (!FeatureEnv[key]) return false;
  return (FeatureEnv[key] as string) === "true";
};

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
}

export const checkDeviceType = (): boolean => !detectMob();

export const featureChecker = {
  // Return bool value as per its valid or not
  [FEATURES.IS_PROFILE_TABS_PHASE_2]: checkFeatureStatus(
    "NEXT_PUBLIC_FEATURE_IS_PROFILE_TABS_PHASE_2"
  ),
  [FEATURES.IS_LANGUAGE_DROPDOWN_PHASE_3]: checkFeatureStatus(
    "NEXT_PUBLIC_FEATURE_IS_LANGUAGE_DROPDOWN_PHASE_3"
  ),
  [FEATURES.IS_WALLET_CREDIT_PHASE_2]: checkFeatureStatus(
    "NEXT_PUBLIC_FEATURE_IS_WALLET_CREDIT_PHASE_2"
  ),
  [FEATURES.IS_PACKAGE_PROMOTION_PHASE_2]: checkFeatureStatus(
    "NEXT_PUBLIC_FEATURE_IS_PACKAGE_PROMOTION_PHASE_2"
  ),
  [FEATURES.IS_MONTHLY_GOLD_PLAN_ONLY]: checkFeatureStatus(
    "NEXT_PUBLIC_FEATURE_IS_MONTHLY_GOLD_PLAN_ONLY"
  ),
  [FEATURES.IS_RESTRICTED_REGION]: checkFeatureStatus(
    "NEXT_PUBLIC_FEATURE_IS_RESTRICTED_REGION"
  ),
};
