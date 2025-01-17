import React from "react";
import Contact from "@/components/contact";
import LazyLoadSection from "./lazyLoadSection";
import dynamic from "next/dynamic";

const About = dynamic(() => import('@/components/about'), {
    loading: () => <p>Loading...</p>
  });
  const Experience = dynamic(() => import('@/components/experience'), {
    loading: () => <p>Loading...</p>
  });
  const Projects = dynamic(() => import('@/components/projects'), {
    loading: () => <p>Loading...</p>
  });


const Content : React.FC = () =>
{
    return(
        <>
            <LazyLoadSection>
                <About />
            </LazyLoadSection>
            
            <LazyLoadSection>
                <Experience />
            </LazyLoadSection>
            
            <LazyLoadSection>
                <Projects />
            </LazyLoadSection>
            
            <LazyLoadSection>
                <Contact />
            </LazyLoadSection>
            
        </>
    );
};

export default Content;