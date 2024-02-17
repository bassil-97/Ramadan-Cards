import React from "react";

export default function HowToUse() {
  return (
    <div className="how-to-use__wrapper">
      <ul>
        <li>
          <img
            src="https://img.icons8.com/fluency/50/000000/image.png"
            alt="Select template"
          />
          <h6>Select your template</h6>
        </li>
        <li>
          <img
            src="https://img.icons8.com/external-bearicons-flat-bearicons/50/000000/external-Message-social-media-bearicons-flat-bearicons.png"
            alt="Add greeting message"
          />
          <h6>Add your greeting message</h6>
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency/50/000000/download.png"
            alt="Download Card"
          />
          <h6>download your card</h6>
        </li>
      </ul>
    </div>
  );
}
