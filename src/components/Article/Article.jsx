import React from "react";
import { CardMedia, Card, CardContent, Typography } from "@mui/material";
import { data } from "./data";
import styles from "./style.module.css";

function Article() {
  const { headTag, textSub, ath, head, content, card, main } = styles;

  return (
    <div className={main} style={{ padding: "50px 0" }}>
      <Typography variant="h4" className={headTag}>
        Latest Articles
      </Typography>
      <div className={content}>
        {data.map(({ image, title, text, author }, id) => (
          <Card sx={{ maxWidth: 345 }} className={card}>
            <CardMedia component="img" image={image} height="250" alt="image" />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={ath}
              >
                By {author}
              </Typography>
              <Typography variant="h5" component="div" className={head}>
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={textSub}
              >
                {text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Article;
