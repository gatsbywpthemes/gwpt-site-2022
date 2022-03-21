import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { useSeoGeneral } from "~/lib/hooks/useSeoGeneral"

const ProjectPage = ({ data }) => {
  const { wpProject: project } = data || {}
  const {
    featuredImage,
    title,
    content,
    uri,
    projectFields: { sections },
  } = project || {}
  const seoGeneral = useSeoGeneral()
  const seoImage = featuredImage?.node?.localFile?.childImageSharp?.original
  const seo = {
    page: project?.seo,
    general: seoGeneral?.wp?.seo,
  }
  return (
    <Layout>
      <Seo
        title={title}
        uri={uri}
        yoastSeo={true}
        seo={seo}
        featuredImage={
          seoImage && {
            src: seoImage.src,
            width: seoImage.width,
            height: seoImage.height,
          }
        }
      />
      <div>{project.title}</div>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ($uri: String!) {
    wpProject(uri: { eq: $uri }) {
      title
      uri
      content
      featuredImage {
        node {
          ...basicImage
        }
      }
      projectFields {
        projectShortDescription
        projectUrl

        sections {
          content
          cssClass
          headline
          headlineTag
          button {
            target
            title
            url
          }
        }
      }
    }
  }
`
