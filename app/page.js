"use client";

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  Code,
  Dns,
  Email,
  GitHub,
  Language,
  OpenInNew,
  Send,
  Storage,
  Web,
} from "@mui/icons-material";

const skills = [
  { name: "HTML", icon: <Language /> },
  { name: "CSS", icon: <Code /> },
  { name: "JavaScript", icon: <Code /> },
  { name: "React", icon: <Code /> },
  { name: "Next.js", icon: <Language /> },
  { name: "PHP", icon: <Dns /> },
  { name: "MySQL", icon: <Storage /> },
  { name: "Git", icon: <GitHub /> },
  { name: "REST API", icon: <Dns /> },
  { name: "Material UI", icon: <Web /> },
];

const services = [
  {
    title: "Web Development",
    description: "Modern and responsive web applications.",
    icon: <Language />,
  },
  {
    title: "Backend Development",
    description: "Reliable backend systems and APIs.",
    icon: <Dns />,
  },
  {
    title: "Database Management",
    description: "Structured and efficient database solutions.",
    icon: <Storage />,
  },
  {
    title: "System Development",
    description: "Practical software solutions for real problems.",
    icon: <Code />,
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#102f59",
      }}
    >
      <Container maxWidth="lg">

        {/* =====================================================
            HERO
        ===================================================== */}

        <Box
          component="section"
          sx={{
            minHeight: {
              xs: "auto",
              md: 650,
            },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.1fr 0.9fr",
            },
            alignItems: "center",
            gap: {
              xs: 5,
              md: 8,
            },
            py: {
              xs: 7,
              md: 10,
            },
          }}
        >
          {/* HERO CONTENT */}

          <Box sx={{ maxWidth: 650 }}>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 3,
                color: "#176fe0",
                mb: 2,
              }}
            >
              HELLO, I'M
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 42,
                  sm: 55,
                  md: 76,
                },
                lineHeight: 0.98,
                letterSpacing: -3,
                fontWeight: 700,
                color: "#102f59",
                mb: 3,
              }}
            >
              Ahmad Abdallah
              <br />
              Khamis
            </Typography>

            <Typography
              component="h2"
              sx={{
                maxWidth: 540,
                fontSize: {
                  xs: 19,
                  md: 22,
                },
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#38516f",
                mb: 2,
              }}
            >
              Computer Science Student & Software Developer
            </Typography>

            <Typography
              sx={{
                maxWidth: 570,
                fontSize: 16,
                lineHeight: 1.8,
                color: "#718096",
                mb: 3.5,
              }}
            >
              A Computer Science student passionate about software
              development, web technologies, databases, and building practical
              digital solutions.
            </Typography>

            {/* HERO BUTTONS */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1.5}
            >
              <Button
                href="#project"
                variant="contained"
                endIcon={<OpenInNew />}
                sx={{
                  minHeight: 46,
                  px: 2.5,
                  borderRadius: "7px",
                  backgroundColor: "#176fe0",
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#102f59",
                    boxShadow: "none",
                  },
                }}
              >
                View My Work
              </Button>

              <Button
                href="#contact"
                variant="outlined"
                endIcon={<Email />}
                sx={{
                  minHeight: 46,
                  px: 2.5,
                  borderRadius: "7px",
                  borderColor: "#d9e1ea",
                  color: "#102f59",
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 600,

                  "&:hover": {
                    backgroundColor: "#102f59",
                    borderColor: "#102f59",
                    color: "#ffffff",
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>

            {/* SOCIAL LINKS */}

            <Stack
              direction="row"
              spacing={2.5}
              sx={{
                mt: 3,
                alignItems: "center",
              }}
            >
              <Button
                href="https://github.com/Shihab4099"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHub />}
                sx={{
                  p: 0,
                  minWidth: 0,
                  color: "#61738a",
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 500,

                  "&:hover": {
                    color: "#176fe0",
                    backgroundColor: "transparent",
                  },
                }}
              >
                GitHub
              </Button>

              <Button
                href="mailto:khamisahmad4099@gmail.com"
                startIcon={<Email />}
                sx={{
                  p: 0,
                  minWidth: 0,
                  color: "#61738a",
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 500,

                  "&:hover": {
                    color: "#176fe0",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Email
              </Button>
            </Stack>
          </Box>

          {/* PROFILE IMAGE */}

          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                md: "flex-end",
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: 290,
                  md: 340,
                },
                maxWidth: 340,
                height: {
                  xs: 400,
                  sm: 360,
                  md: 420,
                },
                p: 1.25,
                backgroundColor: "#f4f7fa",
                border: "1px solid #e4e9ef",
                borderRadius: "10px",
              }}
            >
              <Box
                component="img"
                src="/profile.png"
                alt="Ahmad Abdallah Khamis"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* =====================================================
            ABOUT + SKILLS
        ===================================================== */}

        <Grid
          container
          spacing={2.5}
          component="section"
          sx={{
            pb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          {/* ABOUT */}

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              number="01"
              label="ABOUT ME"
            >
              <Typography
                component="h3"
                sx={{
                  fontSize: 26,
                  color: "#102f59",
                  fontWeight: 650,
                  mb: 2,
                }}
              >
                Who I Am
              </Typography>

              <Typography
                className="infoText"
                sx={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#718096",
                  mb: 1.8,
                }}
              >
                I am a Computer Science student at the State University of
                Zanzibar (SUZA), pursuing a Diploma in Computer Science. I have
                a strong interest in software development, web technologies,
                and information systems.
              </Typography>

              <Typography
                className="infoText"
                sx={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#718096",
                  mb: 2,
                }}
              >
                My goal is to become a professional software developer capable
                of designing and developing reliable solutions for real-world
                problems.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    className="infoText"
                    sx={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "#95a2b2",
                      mb: 0.5,
                    }}
                  >
                    Education
                  </Typography>

                  <Typography
                    className="infoText"
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#38516f",
                    }}
                  >
                    Diploma in Computer Science
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    className="infoText"
                    sx={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "#95a2b2",
                      mb: 0.5,
                    }}
                  >
                    Institution
                  </Typography>

                  <Typography
                    className="infoText"
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#38516f",
                    }}
                  >
                    State University of Zanzibar
                  </Typography>
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>

          {/* SKILLS */}

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              number="02"
              label="EXPERTISE"
            >
              <Typography
                component="h3"
                sx={{
                  fontSize: 26,
                  color: "#102f59",
                  fontWeight: 650,
                  mb: 2.5,
                }}
              >
                Technical Skills
              </Typography>

              <Grid container spacing={1}>
                {skills.map((skill) => (
                  <Grid
                    size={{ xs: 6 }}
                    key={skill.name}
                  >
                    {/* FIXED: Box instead of Stack */}

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1.2,
                        py: 1,
                      }}
                    >
                      <Box
                        className="skillIcon"
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#f2f6fa",
                          color: "#176fe0",
                          flexShrink: 0,

                          "& svg": {
                            fontSize: 17,
                          },
                        }}
                      >
                        {skill.icon}
                      </Box>

                      <Typography
                        className="skillText"
                        sx={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#52677f",
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </InfoCard>
          </Grid>
        </Grid>

        {/* =====================================================
            PROJECT
        ===================================================== */}

        <Box
          component="section"
          id="project"
          sx={{
            pb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <SectionHeading
            number="03"
            label="FEATURED PROJECT"
          />

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 2.5,
                md: 5,
              },
              borderRadius: "10px",
              backgroundColor: "#f6f8fa",
              border: "1px solid #e4e9ee",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.9fr 1.1fr",
              },
              gap: {
                xs: 4,
                md: 6,
              },
              alignItems: "center",
            }}
          >
            {/* PROJECT INFO */}

            <Box>
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#176fe0",
                  mb: 1.5,
                }}
              >
                FINAL YEAR PROJECT
              </Typography>

              <Typography
                component="h3"
                sx={{
                  fontSize: {
                    xs: 27,
                    md: 31,
                  },
                  lineHeight: 1.2,
                  color: "#102f59",
                  fontWeight: 650,
                  mb: 2,
                }}
              >
                Lost ID and Document Recovery System
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#6d7d90",
                  mb: 2.5,
                }}
              >
                A web-based system designed to help users report lost
                documents, register found documents, identify possible matches,
                and request replacement documents when necessary.
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={0.8}
                sx={{
                  mb: 3,
                }}
              >
                {[
                  "Next.js",
                  "React",
                  "PHP",
                  "MySQL",
                  "Material UI",
                ].map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #dfe6ed",
                      color: "#52677f",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
              >
                <Button
                  href="#contact"
                  variant="contained"
                  endIcon={<OpenInNew />}
                  sx={{
                    minHeight: 44,
                    px: 2,
                    borderRadius: "6px",
                    backgroundColor: "#176fe0",
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#102f59",
                      boxShadow: "none",
                    },
                  }}
                >
                  View Project
                </Button>

                <Button
                  href="https://github.com/Shihab4099"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHub />}
                  sx={{
                    minHeight: 44,
                    px: 2,
                    borderRadius: "6px",
                    borderColor: "#d9e1ea",
                    color: "#102f59",
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: 600,

                    "&:hover": {
                      backgroundColor: "#102f59",
                      borderColor: "#102f59",
                      color: "#ffffff",
                    },
                  }}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>

            {/* PROJECT MOCKUP */}

            <ProjectMockup />
          </Paper>
        </Box>

        {/* =====================================================
            EDUCATION + SERVICES
        ===================================================== */}

        <Grid
          container
          spacing={2.5}
          component="section"
          sx={{
            pb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          {/* EDUCATION */}

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: 3.5,
                border: "1px solid #e2e8ef",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
              }}
            >
              <SectionHeading
                number="04"
                label="EDUCATION"
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  mt: 3.5,
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    flexShrink: 0,
                    border: "1px solid #e1e7ed",
                    borderRadius: "8px",
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/suza.png"
                    alt="State University of Zanzibar logo"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      color: "#102f59",
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    Diploma in Computer Science
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#65778b",
                    }}
                  >
                    State University of Zanzibar (SUZA)
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#176fe0",
                      mt: 0.5,
                    }}
                  >
                    2023 – 2026
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* SERVICES */}

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: 3.5,
                border: "1px solid #e2e8ef",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
              }}
            >
              <SectionHeading
                number="05"
                label="WHAT I CAN DO"
              />

              <Grid
                container
                spacing={2.5}
                sx={{
                  mt: 1.5,
                }}
              >
                {services.map((service) => (
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    key={service.title}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          flexShrink: 0,
                          borderRadius: "7px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#f3f6f9",
                          color: "#176fe0",

                          "& svg": {
                            fontSize: 20,
                          },
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 13,
                            color: "#102f59",
                            fontWeight: 600,
                            mb: 0.3,
                          }}
                        >
                          {service.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 11,
                            lineHeight: 1.6,
                            color: "#7a8999",
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <Box
          component="section"
          id="contact"
          sx={{
            pb: {
              xs: 8,
              md: 11,
            },
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <SectionHeading
              number="06"
              label="CONTACT"
            />

            <Typography
              component="h3"
              sx={{
                fontSize: {
                  xs: 30,
                  md: 35,
                },
                lineHeight: 1.2,
                color: "#102f59",
                fontWeight: 650,
                mt: 3,
                mb: 1.5,
              }}
            >
              Let’s Connect
            </Typography>

            <Typography
              sx={{
                maxWidth: 500,
                fontSize: 14,
                lineHeight: 1.8,
                color: "#718096",
                mb: 3,
              }}
            >
              Have a project, opportunity, or idea? Click the button below to
              open Gmail and send me a message.
            </Typography>

            {/* EMAIL */}

            <Box sx={{ mb: 2.5 }}>
              <Button
                href="mailto:khamisahmad4099@gmail.com"
                startIcon={<Email />}
                sx={{
                  p: 0,
                  minWidth: 0,
                  color: "#176fe0",
                  textTransform: "none",
                  fontSize: 13,
                  fontWeight: 600,

                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                khamisahmad4099@gmail.com
              </Button>
            </Box>

            {/* GMAIL BUTTON */}

            <Button
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khamisahmad4099@gmail.com"
              variant="contained"
              startIcon={<Send />}
              sx={{
                minHeight: 44,
                px: 2.5,
                borderRadius: "6px",
                backgroundColor: "#102f59",
                color: "#ffffff",
                textTransform: "none",
                fontSize: 13,
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#176fe0",
                  boxShadow: "none",
                },
              }}
            >
              Send Me a Message
            </Button>
          </Box>
        </Box>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Divider
          sx={{
            borderColor: "#e5eaf0",
          }}
        />

        <Box
          component="footer"
          sx={{
            minHeight: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            py: 2,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              color: "#8996a4",
            }}
          >
            © 2026 Ahmad Abdallah Khamis. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              href="https://github.com/Shihab4099"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                minWidth: 0,
                p: 0,
                color: "#68798c",
                fontSize: 12,
                textTransform: "none",

                "&:hover": {
                  color: "#176fe0",
                  backgroundColor: "transparent",
                },
              }}
            >
              GitHub
            </Button>

            <Button
              href="mailto:khamisahmad4099@gmail.com"
              sx={{
                minWidth: 0,
                p: 0,
                color: "#68798c",

                "&:hover": {
                  color: "#176fe0",
                  backgroundColor: "transparent",
                },
              }}
            >
              <Email sx={{ fontSize: 18 }} />
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({ number, label, children }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        minHeight: 300,
        p: {
          xs: 2.75,
          md: 3.75,
        },
        border: "1px solid #e2e8ef",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        transition: "0.25s ease",

        "& .infoHeader": {
          borderColor: "#e7ecf1",
        },

        "&:hover": {
          backgroundColor: "#102f59",
          borderColor: "#102f59",
          transform: "translateY(-3px)",

          "& .infoHeader": {
            borderColor: "rgba(255,255,255,0.18)",
          },

          "& .infoNumber": {
            color: "#ffffff",
          },

          "& .infoLabel": {
            color: "#ffffff",
          },

          "& h3": {
            color: "#ffffff",
          },

          "& .infoText": {
            color: "#ffffff",
          },

          "& .skillIcon": {
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "#ffffff",
          },

          "& .skillText": {
            color: "#ffffff",
          },
        },
      }}
    >
      <Box
        className="infoHeader"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 2,
          mb: 3,
          borderBottom: "1px solid",
        }}
      >
        <Typography
          className="infoNumber"
          sx={{
            fontSize: 11,
            letterSpacing: 2,
            fontWeight: 700,
            color: "#8291a3",
          }}
        >
          {number}
        </Typography>

        <Typography
          className="infoLabel"
          sx={{
            fontSize: 11,
            letterSpacing: 2,
            fontWeight: 700,
            color: "#8291a3",
          }}
        >
          {label}
        </Typography>
      </Box>

      {children}
    </Card>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ number, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        mb: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          color: "#176fe0",
        }}
      >
        {number}
      </Typography>

      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          color: "#8492a3",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}


/* =========================================================
   PROJECT MOCKUP
========================================================= */

function ProjectMockup() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        border: "1px solid #dfe5eb",
        boxShadow: "0 12px 30px rgba(16,47,89,0.08)",
      }}
    >
      {/* BROWSER BAR */}

      <Box
        sx={{
          height: 32,
          px: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 0.6,
          backgroundColor: "#edf1f5",
        }}
      >
        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "#aeb8c3",
            }}
          />
        ))}
      </Box>

      {/* DASHBOARD */}

      <Box
        sx={{
          minHeight: 280,
          display: "grid",
          gridTemplateColumns: {
            xs: "58px 1fr",
            sm: "100px 1fr",
          },
        }}
      >
        {/* SIDEBAR */}

        <Box
          sx={{
            p: {
              xs: 1,
              sm: 1.5,
            },
            backgroundColor: "#102f59",
          }}
        >
          <Box
            sx={{
              width: {
                xs: 30,
                sm: 38,
              },
              height: 10,
              borderRadius: "3px",
              backgroundColor: "#ffffff",
              opacity: 0.85,
              mx: "auto",
              mt: 0.5,
              mb: {
                xs: 2.5,
                sm: 3.5,
              },
            }}
          />

          {[true, false, false, false].map((active, index) => (
            <Box
              key={index}
              sx={{
                height: 8,
                width: {
                  xs: 35,
                  sm: 60,
                },
                mx: "auto",
                my: {
                  xs: 1.6,
                  sm: 2.1,
                },
                borderRadius: "3px",
                backgroundColor: active
                  ? "#ffffff"
                  : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </Box>

        {/* MAIN */}

        <Box
          sx={{
            p: {
              xs: 1,
              sm: 2.5,
            },
            backgroundColor: "#f8fafc",
            minWidth: 0,
          }}
        >
          {/* TOP */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: 90,
                height: 12,
                borderRadius: "3px",
                backgroundColor: "#b5c0cc",
              }}
            />

            <Box
              sx={{
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: "#d4dce5",
              }}
            />
          </Box>

          {/* STAT CARDS */}

          <Grid
            container
            spacing={1}
            sx={{
              mb: 2,
            }}
          >
            {[
              ["Lost Reports", "24"],
              ["Found Reports", "18"],
              ["Matches", "12"],
            ].map(([title, number]) => (
              <Grid
                size={{ xs: 4 }}
                key={title}
              >
                <Box
                  sx={{
                    p: {
                      xs: 0.8,
                      sm: 1.5,
                    },
                    borderRadius: "5px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e3e8ed",
                  }}
                >
                  <Typography
                    sx={{
                      display: "block",
                      fontSize: {
                        xs: 6,
                        sm: 7,
                      },
                      color: "#8996a4",
                      mb: 0.7,
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 13,
                        sm: 17,
                      },
                      fontWeight: 700,
                      color: "#102f59",
                    }}
                  >
                    {number}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* TABLE */}

          <Box
            sx={{
              backgroundColor: "#ffffff",
              border: "1px solid #e3e8ed",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: 25,
                backgroundColor: "#eef2f5",
              }}
            />

            {[1, 2, 3].map((row) => (
              <Box
                key={row}
                sx={{
                  height: 30,
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 0.5fr",
                  alignItems: "center",
                  gap: 1,
                  px: {
                    xs: 0.8,
                    sm: 1.5,
                  },
                  borderTop: "1px solid #edf0f3",
                }}
              >
                {[1, 2, 3].map((column) => (
                  <Box
                    key={column}
                    sx={{
                      height: 6,
                      borderRadius: "2px",
                      backgroundColor: "#d8dee5",
                    }}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}