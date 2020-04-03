import React from "react";
import { Linking } from "react-native";
import { t } from "i18n-js";

import Styles, { Title, Version, Logo, CTA } from "./Intro.styles";
import { IntroProps as Props } from "./Intro.types";
import Button from "components/global/Button/Button";

import appJson from "../../../app.json";

const Intro: React.FC<Props> = props => {
  const openLink = () => {
    try {
      Linking.openURL(
        "https://docs.google.com/document/d/1tlO1T27itaSTVJuFCod2cQ1Wkxz3FRsW33ekq5U8dgY/edit?usp=sharing"
      );
    } catch (e) {
      console.log("Failed to open url");
    }
  };

  return (
    <Styles>
      <Logo />
      <Title>{t("title")}</Title>
      <Version>
        {t("version")}
        {appJson.expo.version}
      </Version>
      <Button mode={"SECONDARY"} onPress={openLink} viewStyle={CTA}>
        {t("guidelines")}
      </Button>
    </Styles>
  );
};

Intro.defaultProps = {};

export default Intro;
