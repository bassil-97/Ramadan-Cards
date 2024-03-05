import React from "react";
import { useTranslation } from "react-i18next";

export default function HowToUse() {
  const { t } = useTranslation();

  return (
    <div className="how-to-use__wrapper">
      <ul>
        <li>
          <img
            src="https://img.icons8.com/fluency/50/000000/image.png"
            alt="Select template"
          />
          <h6>{t("aboutUs_option_1")}</h6>
        </li>
        <li>
          <img
            src="https://img.icons8.com/external-bearicons-flat-bearicons/50/000000/external-Message-social-media-bearicons-flat-bearicons.png"
            alt="Add greeting message"
          />
          <h6>{t("aboutUs_option_2")}</h6>
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency/50/000000/download.png"
            alt="Download Card"
          />
          <h6>{t("aboutUs_option_3")}</h6>
        </li>
      </ul>
    </div>
  );
}
