import React from "react"
import "./ProjectDetails.css"
import ProjectNavbar from "./ProjectNavbar/ProjectNavbar"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectTechStack from "./ProjectTechStack/ProjectTechStack"
import ProjectContributors from "./ProjectContributors/ProjectContributors"
import ProjectApplication from "./ProjectApplication/ProjectApplication"
import ProjectFooter from "./ProjectFooter/ProjectFooter"


const ProjectDetails = () => {
    return (
        <div>
          <ProjectNavbar />
          <div className="inner-container">
            <ProjectInfo name='Project Name' />
            <ProjectTechStack />
            <ProjectContributors />
            <ProjectApplication />
            <ProjectFooter />
          </div>
        </div>
    )
}

export default ProjectDetails