import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import data from "./data";
import styles from "./style.module.css";

function Info() {
  const { reason, subReason, header, main, info, headingTag, textTag } = styles;

  return (
    <div className={main}>
      <div className={header}>
        <h3 className={reason}>Why choose Easybank?</h3>
        <p className={subReason}>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br /> Control your finances like never before.
        </p>
      </div>
      <div className={info}>
        {data.map(({ icon, heading, text }) => (
          <Card
            sx={{ minWidth: 275 }}
            style={{ margin: "0 20px", boxShadow: "none" }}
          >
            <CardContent>
              <img src={icon} alt={`Images ${heading}`} />
              <Typography variant="h5" component="div" className={headingTag}>
                {heading}
              </Typography>
              <Typography variant="body2" className={textTag}>
                {text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Info;
