// utils/projectsData.ts
import { Project } from '../types/projects';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getGameProjects = (t: any): Project[] => [
  {
    title: t('games.clown_climbing.title', { ns: 'projects' }),
    description: t('games.clown_climbing.description', { ns: 'projects' }),
    tasks: t('games.clown_climbing.tasks', { ns: 'projects' }),
    image: "/Resources/Imgs/clown.png",
    link: "https://borchgamedev.itch.io/clown-climbing"
  },
  {
    title: t('games.mucus_goals.title', { ns: 'projects' }),
    description: t('games.mucus_goals.description', { ns: 'projects' }),
    tasks: t('games.mucus_goals.tasks', { ns: 'projects' }),
    image: "/Resources/Imgs/mucus.png",
    link: "https://4boolgames.itch.io/mucus-goals"
  },
  {
    title: t('games.furballer.title', { ns: 'projects' }),
    description: t('games.furballer.description', { ns: 'projects' }),
    tasks: t('games.furballer.tasks', { ns: 'projects' }),
    image: "/Resources/Imgs/furballer.jpg",
    link: "https://store.steampowered.com/app/2730090/Furballer/"
  },
  {
    title: t('games.kaodi.title', { ns: 'projects' }),
    description: t('games.kaodi.description', { ns: 'projects' }),
    tasks: t('games.kaodi.tasks', { ns: 'projects' }),
    image: "/Resources/Imgs/kaodi.jpeg",
    link: "https://store.steampowered.com/app/3325570/Kaodi/"
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWebProjects = (t: any): Project[] => [
  {
    title: t('web.web1.title', { ns: 'projects' }),
    description: t('web.web1.description', { ns: 'projects' }),
    tasks: t('web.web1.tasks', { ns: 'projects' }),
    image: "/Resources/Imgs/FirstWebpage.png",
    link: "https://borchdev.com"
  },
  {
    title: t('web.web2.title', { ns: 'projects' }),
    description: t('web.web2.description', { ns: 'projects' }),
    tasks: t('web.web2.tasks', { ns: 'projects' }),
    image: "/Resources/Imgs/secret.jpg",
    link: ""
  }
];
