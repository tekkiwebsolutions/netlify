import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SingleAd from '../components/SingleAd/SingleAd'
import LatestPost from '../components/LatestPost/LatestPost'
import BreakingNew from '../components/BreakingNews/BreakingNews'
import JustTextSnippetPost from '../components/JustTextSnippetPost/JustTextSnippetPost'
import NewsLetterBlock from '../components/NewsLetterBlock/NewsLetterBlock'
import JustTitlePostDate from '../components/JustTitlePostDate/JustTitlePostDate'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className="container">
    <SingleAd />
    </div>
    <div className="container top_news">
    <div className='column is-8'>
    <LatestPost />
    </div>
    <div className='column is-3 Breaking_New'>
    <h2>Breaking News</h2>
    <BreakingNew />
    <h1>West Java to review Meykardah project amid alleged bribery case</h1>
    </div>
    </div>
    <div className="trending_right">
       <h2>Trending Right Now</h2>
    <div className='trending_row'> 
    <BreakingNew />
    <BreakingNew />
    <BreakingNew />
    <BreakingNew />
    <BreakingNew />
  </div>
    </div>
    <div className="container">  
    <SingleAd />
    <div className='column is-12 news_newsletter'>
    <div className='column is-8 just_txt_banner'>
    <JustTextSnippetPost />
    <JustTextSnippetPost />
    <div className='singleAd_height'>
    <SingleAd />
    </div>
    <div className='column is-12'>
     <div className='just_txt_divided'>
     <BreakingNew />
    <BreakingNew />
      </div> 
      <div className='just_txt_divided'>
    <BreakingNew />
    <BreakingNew />
    </div>
    </div>
    <JustTextSnippetPost />
    <JustTextSnippetPost />
    <div className='last_singleAd singleAd_height'>
      <SingleAd />
    </div>
    <JustTextSnippetPost />
    </div>
    <div className='column is-4'>
      <div className='newsletter_row'>
      <NewsLetterBlock />
      <div className='right_side_bannerAd'>
      <SingleAd />
      <div className='Top_News'>
      <h2>TopNews</h2>
      </div>
      <JustTitlePostDate />
      <JustTitlePostDate />
      <JustTitlePostDate />
      <JustTitlePostDate />
      <SingleAd />
      </div>
     
      </div>
    </div>
    </div>

    </div>
 
   
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
