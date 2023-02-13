import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SwitchToggle from "../SwitchToggle";
import * as React from "react";
import {
  Card,
  Box,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  // CardActions,
} from "@mui/material";
import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  PhoneIphone,
  Twitter,
  LocationOn,
  Email,
} from "@mui/icons-material";

import { IconButton } from "@mui/material";

import backGroundImage from "../img/bookight.jpg";
import backGroundDarkImage from "../img/darktheme.jpg";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
function DefaultLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: darkMode ? "#28282B" : "#f5f5f5",
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
  }));

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          p: 2,
          backgroundImage: darkMode
            ? `url(${backGroundDarkImage})`
            : `url(${backGroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          fontFamily: "Monospace",
        }}
      >
        <Box sx={{ height: "100hv", width: "15%" }}></Box>
        <Box
          sx={{
            height: "100hv",
            width: "70%",
            overflowY: "scroll",
            // backgroundColor: "grey.600",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              height: "10%",
              width: 1,
              fontSize: "h6.fontSize",
              // backgroundColor: "grey.300",
            }}
          >
            <h1 className="textGradient">Greetings,</h1>
            <SwitchToggle
              check={darkMode}
              change={() => setDarkMode(!darkMode)}
            />
          </Box>
          <Box
            sx={{
              width: 1,
              height: "10%",
              // backgroundColor: "#000",
            }}
          ></Box>

          <Box
            sx={{
              // backgroundColor: "grey.900",
              height: "80%",
            }}
          >
            <div
              style={{
                // backgroundColor: "#000",
                maxWidth: 420,
                position: "relative",
                height: "100%",
              }}
            >
              <Card
                sx={{
                  p: 2,
                  borderRadius: 5,
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  position: "absolute",
                  top: 150,
                  height: "78%",
                  overflowY: "scroll",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 1,
                    height: "90px",
                    // backgroundColor: "#000",
                  }}
                ></Box>
                <CardContent
                  sx={{
                    // backgroundColor: "grey.100",
                    overflowY: "scroll",
                    justifyContent: "center",
                    alignItems: "center",

                    // height: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Diya Shrestha
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    color="text.secondary"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Front-end Developer
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <IconButton size="medium" disableRipple disableFocusRipple>
                      <FacebookTwoTone
                        className="deleteIcon"
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: darkMode ? "#28282B" : "#f5f5f5",
                          padding: 1,
                          borderRadius: 2,
                          " &:hover": {
                            color: "aliceblue",
                          },
                          color: "#3b5998",
                        }}
                      />
                    </IconButton>
                    <IconButton disableRipple disableFocusRipple>
                      <Twitter
                        className="deleteIcon"
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: darkMode ? "#28282B" : "#f5f5f5",
                          padding: 1,
                          borderRadius: 2,
                          " &:hover": { color: "aliceblue" },
                          color: "#00acee",
                        }}
                      />
                    </IconButton>
                    <IconButton disableRipple disableFocusRipple>
                      <Instagram
                        className="deleteIcon"
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: darkMode ? "#28282B" : "#f5f5f5",
                          padding: 1,
                          borderRadius: 2,
                          " &:hover": { color: "aliceblue" },
                          color: "#ea4c89",
                        }}
                      />
                    </IconButton>
                    <IconButton disableRipple disableFocusRipple>
                      <LinkedIn
                        className="deleteIcon"
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: darkMode ? "#28282B" : "#f5f5f5",
                          padding: 1,
                          borderRadius: 2,
                          " &:hover": { color: "aliceblue" },
                          color: "#0072b1",
                        }}
                      />
                    </IconButton>
                  </Typography>
                  <Demo>
                    <List sx={{ p: 0 }}>
                      <ListItem>
                        <IconButton disableRipple disableFocusRipple>
                          <PhoneIphone
                            className="deleteIcon"
                            sx={{
                              width: 40,
                              height: 40,
                              backgroundColor: darkMode ? "#000" : "#fff",
                              padding: 1,
                              borderRadius: 2,
                              " &:hover": { color: "aliceblue" },
                              color: "#ea4c89",
                              boxShadow: 1,
                            }}
                          />
                        </IconButton>
                        <ListItemText
                          primary="Phone"
                          secondary="+977-9817090124"
                        />
                      </ListItem>
                      <Divider sx={{ mx: 4 }} />
                    </List>
                    <List sx={{ p: 0 }}>
                      <ListItem>
                        <IconButton disableRipple disableFocusRipple>
                          <Email
                            className="deleteIcon"
                            sx={{
                              width: 40,
                              height: 40,
                              backgroundColor: darkMode ? "#000" : "#f5f5f5",
                              padding: 1,
                              borderRadius: 2,
                              " &:hover": { color: "aliceblue" },
                              color: "#40B5AD",
                              boxShadow: 1,
                            }}
                          />
                        </IconButton>
                        <ListItemText
                          primary="Email"
                          secondary="diyashrestha2000@gmail.com"
                        />
                      </ListItem>
                      <Divider sx={{ mx: 4 }} />
                    </List>
                    <List sx={{ p: 0 }}>
                      <ListItem>
                        <IconButton disableRipple disableFocusRipple>
                          <LocationOn
                            className="deleteIcon"
                            sx={{
                              width: 40,
                              height: 40,
                              backgroundColor: darkMode ? "#000" : "#f5f5f5",
                              padding: 1,
                              borderRadius: 2,
                              " &:hover": { color: "aliceblue" },
                              color: "#fd1d62",
                              boxShadow: 1,
                            }}
                          />
                        </IconButton>
                        <ListItemText
                          primary="Location"
                          secondary="Kathmandu, Nepal"
                        />
                      </ListItem>
                    </List>
                  </Demo>
                </CardContent>
              </Card>
              <CardMedia
                alt="green iguana"
                image={require("../img/pic.jpg")}
                sx={{
                  height: 245,
                  width: "60%",
                  border: "1px solid none",
                  borderRadius: "20px",
                  fontWeight: "700",
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  boxShadow: 3,
                }}
              ></CardMedia>
            </div>
          </Box>
        </Box>
        <Box sx={{ height: "100hv", width: "15%" }}></Box>
      </Box>
    </ThemeProvider>
  );
}
export default DefaultLayout;
