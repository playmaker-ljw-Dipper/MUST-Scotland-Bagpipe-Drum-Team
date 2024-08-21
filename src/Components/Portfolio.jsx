/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/sc2.jpg";

const imageAltText = "Group photo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "video1",
    description:
      "在澳科大毕业怎能这么大气？他们出动亚洲唯一的校队来送别！",
    url: " https://b23.tv/rj1qF9f",
  },
  {
    title: "video2",
    description:
      "苏格兰风笛鼓队开场的澳科大开学典礼，什么叫仪式感",
    url: "https://b23.tv/1UIXd6R",
  },
  {
    title: "Video3",
    description:
      "花式杂技鼓、风笛吹中国歌？还能这样玩！澳科大苏格兰风笛鼓乐队专场",
    url: " https://b23.tv/nrjXWr7",
  },
  {
    title: "video4",
    description:
      "毕业礼前还有风笛暖场？澳门科技大学的特色！",
    url: "https://b23.tv/1wGvqIf",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
