import React from 'react';

import '../index.scss'

import HtmlIcon from "../assets/images/html-5.png";
import CssIcon from "../assets/images/css.png";
import JsIcon from "../assets/images/javascript.png";
import SassIcon from "../assets/images/sass.png";
import ReactIcon from "../assets/images/react.png";
import NodeIcon from "../assets/images/nodejs.png";
import TypeScriptIcon from "../assets/images/typescript.png";
import PythonIcon from "../assets/images/python.png";
import JavaIcon from "../assets/images/java.png";
import GithubIcon from "../assets/images/github.png";
import CplusIcon from "../assets/images/c-.png";
import SqlIcon from "../assets/images/database.png";
import DockerIcon from "../assets/images/docker.png";
import PostgresIcon from "../assets/images/postgre.png";
import MySQLIcon from "../assets/images/mysql.png";


const AnnouncementsComponent = () => {
  return (
    <>
      <div className='container announcements'>
          <h2>Technologies</h2>

          <div className='tech-container'>
            <img src={PythonIcon} alt="python" />
            <img src={JavaIcon} alt="Java" />
            <img src={CplusIcon} alt="C++" />
            <img src={HtmlIcon} alt="html" />
            <img src={CssIcon} alt="css" />
            <img src={SassIcon} alt="sass" />
            <img src={GithubIcon} alt="github" />
          </div>

          <div className='tech-container'>
              <img src={JsIcon} alt="javascript" />
              <img src={ReactIcon} alt="react" />
              <img src={NodeIcon} alt="node" />
              <img src={TypeScriptIcon} alt="typescript" />
              <img src={SqlIcon} alt="sql" />
              <img src={MySQLIcon} alt="mysql" />
              <img src={DockerIcon} alt="docker" />
              <img src={PostgresIcon} alt="postgres" />
          </div>
         
      </div>
    </>
  )
}

export default AnnouncementsComponent