import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../styles/AboutStyle.css";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          textAlign: "center",
          padding: "60px 120px",
          backgroundColor: "#2e8b57ad",

          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2.2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            p: 5,
            fontSize: "14px",
            "& h4": {
              fontSize: "1.6rem",
            },
          },
        }}
      >
        <Typography variant="h4" color={"#003d1f"} fontFamily={"Great Vibes"}>
          Welcome To Herb Empire
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a
          magnam alias unde dolorum eos placeat cupiditate illo reprehenderit
          modi incidunt, iusto vitae tempora et. Voluptatem, numquam porro
          veniam corrupti rem, harum reprehenderit laboriosam voluptatibus amet
          doloribus magni neque veritatis officia libero beatae autem ullam
          cupiditate. Sunt cum labore doloremque mollitia minus consequatur,
          nostrum temporibus, repellendus quidem neque tempore? Dolorum laborum
          modi quasi sunt cum officiis velit. Sunt veritatis tempora,
          praesentium quia labore, modi dolores nisi dolorem consequuntur hic
          aliquid quo similique porro nostrum ipsum molestiae cum accusamus
          tenetur id? Eveniet at ratione optio fugiat dolorum vel suscipit eos
          doloremque?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, incidunt libero cum ducimus, corporis omnis qui
          recusandae similique laboriosam a aspernatur magni repellendus quis
          molestiae dolorum, tenetur optio. Officia, temporibus? Modi molestiae
          amet commodi dolorum deleniti itaque repellendus harum esse veritatis
          tenetur illum consequatur repellat soluta sit accusamus omnis unde est
          beatae facilis, sequi dolorem. Neque, provident saepe, corporis non
          nesciunt corrupti laborum eaque placeat dolores quas assumenda atque
          porro rerum et alias! Nihil rem tempora eaque perspiciatis? Quasi
          nostrum sunt incidunt quod minus, eos possimus eveniet nesciunt
          laboriosam sed at repellat ipsam quibusdam sint maiores vero alias
          totam explicabo!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
