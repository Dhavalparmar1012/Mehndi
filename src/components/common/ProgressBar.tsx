import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  const [percentage, setPercentage] = useState(30);

  useEffect(() => {
    const updateProgress = (progress: number) => {
      setPercentage(progress * 100);
    };

    const progressInterval = setInterval(() => {
      if (percentage < 100) {
        updateProgress(percentage / 100 + 0.01);
      } else {
        clearInterval(progressInterval);
      }
    }, 2);

    return () => {
      clearInterval(progressInterval);
    };
  }, [percentage]);

  return (
    <Box width="100%" position="fixed" top={{ xs: "52px", sm: "92px" }}>
      {percentage < 100 && (
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{ height: { xs: 7, sm: 5 } }}
        />
      )}
    </Box>
  );
};

export default Loader;
