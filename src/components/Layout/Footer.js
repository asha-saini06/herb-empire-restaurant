import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          left: 0,
          bottom: 0,
          right: 0,
          // height: "calc(100% - 60px)",
          textAlign: "center",
          bgcolor: "#1A1A19",
          color: "white",
          p: 1,
          "& span": {
            color: "#4CAF50",
          },
        }}
      >
        <Box
          sx={{
            my: 2.2,
            "& svg": {
              fontSize: "28px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#4CAF50",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            "@media(max-width:600px)": {
              fontSize: "15px",
            },
          }}
        >
          <p>
            <span> Herb Empire</span> &copy; 2023 | All Rights Reserved
          </p>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
