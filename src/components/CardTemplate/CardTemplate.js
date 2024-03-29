import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import html2canvas from "html2canvas";

import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import CustomMessage from "../UI/CustomMessage";
import "./CardTemplate.css";

import data from "../../assets/data/images.json";
import manuscripts from "../../assets/data/manuscripts.json";

export default function CardTemplate() {
  const { t } = useTranslation();

  const [theme, setTheme] = useState(data[0].source);
  const [manuscript, setManuscript] = useState(manuscripts[0].source);
  const [message, setMessage] = useState();
  const [clientName, setClientName] = useState("John Doe");

  const cardRef = useRef();

  const selectThemeHandler = (event) => {
    let item = data.filter(function (el) {
      return el.id === event.target.value;
    });
    setTheme(item[0].source);
  };

  const selectManuscriptHandler = (event) => {
    let item = manuscripts.filter(function (el) {
      return el.id === event.target.value;
    });
    setManuscript(item[0].source);
  };

  const setSelectedMessage = (msg) => {
    setMessage(msg);
  };

  const setCustomMessage = (msg) => {
    setMessage(msg);
  };

  const doCapture = () => {
    html2canvas(document.getElementById("card")).then((canvas) => {
      simulateDownloadImageClick(
        canvas.toDataURL("image/jpeg", 0.9),
        `${clientName}.png`
      );
    });
  };

  function simulateDownloadImageClick(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download !== "string") {
      window.open(uri);
    } else {
      link.href = uri;
      link.download = filename;
      accountForFirefox(clickLink, link);
    }
  }

  function clickLink(link) {
    link.click();
  }

  function accountForFirefox(click) {
    // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
  }

  return (
    <React.Fragment>
      <div
        className="card mb-3"
        id="card"
        style={{ direction: "rtl" }}
        ref={cardRef}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={theme}
              className="img-fluid rounded-start card-img"
              alt="card"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body center flex-column text-center">
              <img
                src={manuscript}
                className="manuscript-img img-responsvie"
                alt="manuscript"
              />
              <p className="card-text message-text">{message}</p>
              <h4 className="client-name">{clientName}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 options-col">
          <SectionTitle>{t("theme_options_title")}</SectionTitle>
          <div className="form-group">
            <h6>{t("themes_list_title")}</h6>
            <div className="select-menu mt-3">
              <select
                className="form-select w-100"
                aria-label="Default select example"
                onChange={selectThemeHandler}
              >
                {data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              {/* <h5>or</h5>
              <input type="file" /> */}
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 options-col">
          <SectionTitle>{t("manuscript_options_title")}</SectionTitle>
          <div className="form-group">
            <h6>{t("manuscript_list_title")}</h6>
            <div className="select-menu mt-3">
              <select
                className="form-select w-100"
                aria-label="Default select example"
                onChange={selectManuscriptHandler}
              >
                {manuscripts.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <input
            type="text"
            className="form-control w-"
            placeholder="Enter your name"
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <MessagesContainer setSelectedMessage={setSelectedMessage} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <CustomMessage customMessageHandler={setCustomMessage} />
        </div>
      </div>
      <div className="mt-5 mb-3 center">
        <Button onClick={doCapture}>{t("download_card")}</Button>
      </div>
    </React.Fragment>
  );
}
