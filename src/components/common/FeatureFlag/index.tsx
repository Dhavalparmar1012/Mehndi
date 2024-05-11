import { toast } from "react-toastify";
import { featureChecker } from "./featureChecker";
import { FEATURES } from "@/types/Features";

type FeatureFlagProps = {
  features: FEATURES[];
  fallback: React.ReactNode;
  children: React.ReactNode;
};

export const FeatureFlag = ({
  features,
  fallback,
  children,
}: FeatureFlagProps) => {
  let isValid = true;

  features.forEach((feature) => {
    const isFeatureValid = featureChecker[feature];
    if (!isFeatureValid) {
      isValid = false;
      return;
    }
  });

  if (isValid) {
    return <>{children}</>;
  } else if (fallback) {
    return <>{fallback}</>;
  } else {
    toast.error("Feature is not available");
    return <></>;
  }
};

export const useIsFeatureFlag = (features: FEATURES[]) => {
  let isValid = true;

  features.forEach((feature) => {
    const isFeatureValid = featureChecker[feature];
    if (!isFeatureValid) {
      isValid = false;
      return;
    }
  });

  return isValid;
};
