import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={`${styles.hamburger}`}>
          <div className={`${styles.menuToggle}`}>
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul className={`${styles.menu}`}>
              <a href="#" className={`${styles.active}`}>
                {" "}
                <li>Pricing</li>{" "}
              </a>
              <a href="#">
                {" "}
                <li>How it works</li>{" "}
              </a>

              <Accordion className={styles.dropdownDiv1}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  className={styles.dropdownDiv}
                  // id="panel1a-header"
                >
                  <Typography className={styles.dropdownHead}>
                    Browse Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.links}>
                    <div className={styles.link}>
                      <h2>Web, Mobile & Software Dev</h2>
                    </div>

                    <div className={styles.link}>
                      <Link href="/designandcreative">
                        <a>
                          <h2>Design & Creative</h2>
                        </a>
                      </Link>
                    </div>

                    <div className={styles.link}>
                      <h2>Data Science & Analytics</h2>
                    </div>

                    <div className={styles.link}>
                      <h2>Sales & Marketing</h2>
                    </div>

                    <div className={styles.link}>
                      <h2>Engineering and Architecture</h2>
                    </div>

                    <div className={styles.link}>
                      <h2>Writing </h2>
                    </div>

                    <div className={styles.link}>
                      <h2>Admin Support</h2>
                    </div>

                    <div className={styles.link}>
                      <h2>Consultancy</h2>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </ul>
          </div>
        </div>

        <div className={styles.logoAndSearch}>
          <Link href="/">
            <a>
              <div className={styles.logo}>
                <span className={styles.circle1}></span>
                <span className={styles.circle2}></span>
                <h1 className="logo_title">OFI</h1>
              </div>
            </a>
          </Link>
          <Link href="/dashboard">
            <div>
              <input
                type="text"
                className={styles.search}
                placeholder="Find Services..."
              />
            </div>
          </Link>
        </div>

        <div className={`${styles.links} ${styles.linksnav}`}>
          <div className={styles.link}>
            <h2>Pricing</h2>
          </div>

          <div className={styles.link}>
            <h2>How it works</h2>
          </div>

          <div className={styles.link}>
            <Link href="/login">
              <a>
                <h2>Login</h2>
              </a>
            </Link>
          </div>

          <div className={styles.link}>
            <Link href="/register">
              <a>
                <h2>Sign up</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
