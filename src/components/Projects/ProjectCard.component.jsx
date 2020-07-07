import React from "react"

//icon imports
import {IoIosGlobe} from "react-icons/io";
import {FaGithub} from "react-icons/fa";

import "./ProjectCard.styles.css"

export const ProjectCard = props => {
  const relativeImg = String(props.image.split("/").slice(-1))
  return (
    <div id={props.order} className="project-card">
      <div className="card-img-div">
        <img
          className="card-image"
          src={require("../../images/" + relativeImg)}
        />
      </div>
      <div className="card-body">
        <h3 className="project-title">{props.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
        <p>Tech: {props.tags.join(", ")}</p>
        <div className="project-links">
          <a target="_blank" href={props.repo}><FaGithub size={25} color={"#3da9fc"}/></a>
          <a target="_blank" href={props.deploy}><IoIosGlobe size={25} color={"#3da9fc"}/></a>
        </div>
      </div>
    </div>
  )
}
