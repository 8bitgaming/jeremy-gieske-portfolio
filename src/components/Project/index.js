import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import OgreQuest from "../../assets/img/OgreQuest.png";
import Blogger from "../../assets/img/blogger.png";
import Travel from "../../assets/img/randomTravel.png";
import Social from "../../assets/img/social-network.jpg";
import Weather from "../../assets/img/weather.png";
import Team from "../../assets/img/team-builder.jpg";
import { Typography } from "@mui/material";

export default function Projects() {
  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.tech}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
                href={item.href}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: OgreQuest,
    title: (
      <a class="portfolio-img" href={`https://ogrequest.herokuapp.com/`}>
        {<Typography variant="h6">OgreQuest</Typography>}
      </a>
    ),
    tech: "Javascript, MySQL2, Handlebars, W3.CSS",
    href: "https://github.com/8bitgaming/OgreQuest",
  },
  {
    img: Blogger,
    title: (
      <a
        class="portfolio-img"
        href={`https://blogger-jg-12.herokuapp.com/`}
      >
        {<Typography variant="h6">Blogger!</Typography>}
      </a>
    ),
    tech: "Express, Sequelize, MySQL2",
    href: "https://github.com/8bitgaming/12-blogger",
  },
  {
    img: Weather,
    title: (
      <a
        class="portfolio-img"
        href={`https://8bitgaming.github.io/06-weather-outlook/`}
      >
        {<Typography variant="h6">Weather Outlook</Typography>}
      </a>
    ),
    tech: "Javascript, APIs, HTML/CSS",
    href: "https://github.com/8bitgaming/06-weather-outlook",
  },
  {
    img: Social,
    title: (
      <a
        class="portfolio-img"
        href={`https://github.com/8bitgaming/13-Social-API`}
      >
        {<Typography variant="h6">Social API</Typography>}
      </a>
    ),
    tech: "MongoDb, Express, Node, Mongoose",
    href: "https://github.com/8bitgaming/13-Social-API",
  },
  {
    img: Team,
    title: (
      <a
        class="portfolio-img"
        href={`https://github.com/8bitgaming/08-team-org-generator`}
      >
        {<Typography variant="h6">Team Org Generator</Typography>}
      </a>
    ),
    tech: "Node, Inquirer",
    href: "https://github.com/8bitgaming/08-team-org-generator",
  },
  {
    img: Travel,
    title: (
      <a
        class="portfolio-img"
        href={`https://8bitgaming.github.io/random-travel-generator/`}
      >
        {<Typography variant="h6">Random Travel Generator</Typography>}
      </a>
    ),
    tech: "Javascript, APIs, W3.CSS",
    href: "https://github.com/8bitgaming/random-travel-generator",
  },
];
