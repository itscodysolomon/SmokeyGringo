import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"

// markup
const AlwaysTuesday = () => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {sourceInstanceName: {eq: "tuesday-images"}}) {
            edges {
              node {
                extension
                relativePath
                id
                dir
                publicURL
                name
              }
            }
          }
        }
    `)

    const images = data.allFile.edges;
    let galleryContainer = [];
    let galleryContainerDT = [];
    let imageRow2column = [];
    let imageRow3column = [];
    let imageRow5column = [];
    let imageCount = 0;

    images.forEach(function (image, index) {
        if (imageCount > 1) {
          imageRow3column.push(<img key={image.node.id} src={image.node.publicURL} alt={image.node.name} title={image.node.name} />);
          imageRow2column = [];
        } else {
            imageRow2column.push(<img key={image.node.id} src={image.node.publicURL} alt={image.node.name} title={image.node.name} />);
            if ((index + 1) % 2 === 0) {
                galleryContainer.push(<div key={image.node.id} className="gallery-row-2">{imageRow2column}</div>);
            }
        }
        
        if ((index + 1) % 5 === 0) {
          imageCount = 0;
          galleryContainer.push(<div key={image.node.id} className="gallery-row-3">{imageRow3column}</div>);
          imageRow3column = [];
        } else {
            imageCount++;
        }
    });

    images.forEach(function (image, index) {
        imageRow5column.push(<img key={image.node.id + '-dt'} src={image.node.publicURL} alt={image.node.name} title={image.node.name} />);
        if ((index + 1) % 5 === 0) {
          galleryContainer.push(<div key={image.node.id + '-dt'} className="gallery-row-5">{imageRow5column}</div>);
          imageRow5column = [];
        }
    });

    return (
        <section id="alwaysTuesday">
            <h1><a href="https://www.instagram.com/smokeygringo/" target="_blank" rel="noreferrer"><span></span>ALWAYSTUESDAY</a></h1>
            <div id="always-tuesday-gallery">
                {galleryContainer}
                {galleryContainerDT}
            </div>
        </section>
    )
  }
  
export default AlwaysTuesday