import React from "react";
import { ReviewTitleMainContainer } from "../ReviewPage/Review.styled";
import UINewTypography from "../UIComponent/UINewTypography";
import { HeadlinePink } from "../ReviewPage/Common.styled";

const Service = () => {
  return (
    <ReviewTitleMainContainer>
      <UINewTypography variant="h2" textAlign="center" color="#6488ea">
        Services
      </UINewTypography>
      <HeadlinePink />
      <UINewTypography variant="SubtitleLargeBold">
        I can do Mehndi/Henna for just about any occasion. I Specialize in
        Bridal Mehndi, Sangeet Parties, Engagements, Baby Showers, Birthday
        Parties, Ladies Night outs, School Events, Corporate Events and
        Fundraisers. I love to extend this art form onto cakes and other mediums
        like wood, glass and candles.
      </UINewTypography>
    </ReviewTitleMainContainer>
  );
};

export default Service;
