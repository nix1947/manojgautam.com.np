import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Full Stack Developer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1>
              Halo, saya Razaqul Tegar
            </h1>
            <p>Saya adalah pengembang dari <a href="https://www.panda.id" target="_blank">Panda SID</a>, Full Stack Developer & CTO di <a href="https://www.puskomedia.id" target="_blank">Puskomedia Indonesia</a>, perokok aktif, kutu buku musiman, dan kerap berkegiatan di alam terbuka dan sesekali menangkap gerak dengan kamera ponselnya.</p>
            <p>Anda dapat menemukan saya di <a href="https://twitter.com/razaqultegar" target="_blank">Twitter</a> atau <a href="mailto:myrazaqul@gmail.com">mengirimkan email</a>. (Saya tidak memiliki akun di Facebook, LinkedIn, atau Instagram).</p>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Artikel Terbaru</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 10
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
