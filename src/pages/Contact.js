import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 8,
          mx: 3,
          backgroundColor: "#81c7849c",
          width: "fit-content",
          "& h4": {
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
            color: "#003d1f",
          },
        }}
      >
        <Typography variant="h4" fontFamily={"Great Vibes"}>
          Contact Herb Empire
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          corporis explicabo assumenda! Beatae tenetur in nemo reprehenderit!
          Laboriosam delectus labore reiciendis earum maxime. Hic unde. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. A eius sed eligendi
          doloremque ducimus cumque. Asperiores maiores consequatur! Enim
          repudiandae quo unde recusandae non distinctio eius!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          mb: 6,
          width: "600px",
          "@media (max-width:600px)": {
            width: "280px",
          },
        }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: "#81c7849c" }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#000000c4", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon
                    sx={{
                      color: "#1B5E20",
                      pt: 1,
                    }}
                  />{" "}
                  1800-00-0000 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon
                    sx={{
                      color: "#1B5E20",
                      pt: 1,
                    }}
                  />{" "}
                  contact@herbempire.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <FaxIcon
                    sx={{
                      color: "#003d1f",
                      pt: 1,
                    }}
                  />{" "}
                  (123) 456-7890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
