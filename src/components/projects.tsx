import React, { useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useTranslation } from "react-i18next";
import { getGameProjects, getWebProjects } from '../utils/projectsData';
import Image from 'next/image';
import '../styles/projects.css';


interface Project {
  title: string;
  description: string;
  tasks: string;
  image: string;
  link: string;
}

const panelVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activePanel, setActivePanel] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1);

  // Ensure projects namespace is loaded
  useEffect(() => {
    i18n.loadNamespaces('projects').then(() => {
      console.log('Projects namespace loaded');
    });
  }, [i18n]);


  const gameProjectsData = getGameProjects(t);
  const webProjectsData = getWebProjects(t);

  const handleSwipe = useCallback((direction: string) => {
    const currentProjects = selectedOption === 1 ? gameProjectsData : webProjectsData;
    if (direction === "Left") {
      setActivePanel((prev) => (prev + 1) % currentProjects.length);
    } else if (direction === "Right") {
      setActivePanel((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
    }
  }, [selectedOption, gameProjectsData, webProjectsData]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("Left"),
    onSwipedRight: () => handleSwipe("Right"),
    trackMouse: true,
  });

  const handleToggle = (index: number) => {
    setActivePanel(index);
  };

  const Panel = React.memo(({ project }: { project: Project }) => (
    <motion.div
      className="projects-panel-content"
      key={project.title}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={panelVariants}
      transition={{ duration: 0.5 }}
    >
      <h2>{project.title}</h2>
      <div className="project-content">
        <a href={project.link} target="_blank">
          <Image 
            src={project.image} 
            alt={project.title} 
            className="view" 
            width={500} 
            height={500} 
            loading="lazy"
          />
        </a>
        <div className="project-description">
          <p style={{ marginBottom: "3rem" }}>{project.description}</p>
          <p><b>{project.tasks}</b></p>
        </div>
      </div>
    </motion.div>
  ));
  Panel.displayName = "Panel";
  
  return (
    <section className="projects-container" id="projects">
      <h1 className="projects-header">
        <a>{t('projects_title', { ns: 'projects' })}</a>
      </h1>

      <div className="project-options">
        <div
          className={`option view ${selectedOption === 1 ? "active" : ""}`}
          onClick={() => setSelectedOption(1)}
        >
          <a>{t('games_option', { ns: 'projects' })}</a>
        </div>
        <div
          className={`option view ${selectedOption === 2 ? "active" : ""}`}
          onClick={() => setSelectedOption(2)}
        >
          <a>{t('web_option', { ns: 'projects' })}</a>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedOption === 1 && (
          <motion.div
            key="option1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            className="panel"
          >
            <div className="panel-container">
              <div className="projects-content-container" {...swipeHandlers}>
                <AnimatePresence mode="wait">
                  <Panel project={gameProjectsData[activePanel]} />
                </AnimatePresence>
              </div>
              <div className="toggle-buttons">
                {gameProjectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleToggle(index)}
                    className={activePanel === index ? "active" : ""}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {selectedOption === 2 && (
          <motion.div
            key="option2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            className="panel"
          >
            <div className="panel-container">
              <div className="projects-content-container" {...swipeHandlers}>
                <AnimatePresence mode="wait">
                  <Panel project={webProjectsData[activePanel]} />
                </AnimatePresence>
              </div>
              <div className="toggle-buttons">
                {webProjectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleToggle(index)}
                    className={activePanel === index ? "active" : ""}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;