import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          background: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 2,
        }}
      >
        {MenuList.map((menu) => (
          <Card
            sx={{
              maxWidth: "350px",
              display: "flex",
              m: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px", height: "50vh" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
