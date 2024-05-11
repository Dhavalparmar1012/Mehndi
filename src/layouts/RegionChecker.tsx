import { FeatureFlag } from "@/components/common/FeatureFlag";
import { FEATURES } from "@/types/Features";
import { ReactNode } from "react";

const RegionChecker = ({ children }: { children: ReactNode }) => {
  return (
    <FeatureFlag
      features={[FEATURES.IS_RESTRICTED_REGION]}
      fallback={<>{children}</>}
    >
      <>
        <>{children}</>
      </>
    </FeatureFlag>
  );
};

export default RegionChecker;
