import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import OgreQuest from '../../assets/img/OgreQuest.png';
import Blogger from '../../assets/img/blogger.png';
import Travel from '../../assets/img/randomTravel.png';
import Social from '../../assets/img/social-network.jpg';
import Weather from '../../assets/img/weather.png';
import Team from '../../assets/img/team-builder.jpg';


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
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
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
    title: 'OgreQuest',
    tech: 'Javascript, MySQL2, Handlebars, W3.CSS',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Blogger,
    title: 'Blogger!',
    tech: 'Express, Sequelize, MySQL2',
  },
  {
    img: Weather,
    title: 'Weather Outlook',
    tech: 'Javascript, APIs, HTML/CSS',
  },
  {
    img: Social,
    title: 'Social-API',
    tech: 'MongoDb, Express, Node, Mongoose',
    cols: 2,
  },
  {
    img: Team,
    title: 'Team Org Generator',
    tech: 'Node, Inquirer',
    cols: 2,
  },
  {
    img: Travel,
    title: 'Random Travel Generator',
    tech: 'Javascript, APIs, W3.CSS',
    rows: 2,
    cols: 2,
  },
];