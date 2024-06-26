import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  pathPrefix: "/bytes",
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.mjs
	siteTitle: `byte2b`,
	siteTitleAlt: `byte2b: Byte to Brain`,
    siteHeadline: `byte2b: Byte to Brain`,
    siteUrl: `https://optimizean.github.io/bytes`,
    siteDescription: `log experiences and give back knowledge as generously as it's received.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@optimizean`,
  },
  trailingSlash: `always`,
  plugins: [

	// --- Optional Plugin ---//
	// rendering
	`gatsby-plugin-image`,	// srcset, placeholder, blur before loading
	`gatsby-plugin-sharp`,	// practical image handling (e.g. compress)
	`gatsby-plugin-offline`,// setup a site to be able to run offline
	// SEO
	{
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://optimizean.github.io/bytes/`,
      },
  	},
	// pages
	`gatsby-remark-autolink-headers`,
	
	// google stuff
	{
	  resolve: `gatsby-plugin-google-gtag`,
	  options: {
		  trackingIds: [`G-M8Y6T6MR7F`],
	  }
	},
	{
	  resolve: `gatsby-plugin-google-adsense`,
	  options:{
		  publisherId: `ca-pub-3205853116674102`
	  }
	},
	{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
      	host:'https://optimizean.github.io/bytes/',
          sitemap: 'https://optimizean.github.io/bytes/sitemap-index.xml',
          policy:[{ userAgent: '*', allow: '/'}],
    	
	  }
	},
	{
      resolve: 'gatsby-plugin-react-helmet',
      options: {
        meta: [
          { name: 'google-site-verification', content: 'qM97oJuX0VG4W5EXVzIVND8aLap6gpkx7uExvqR91Ys' },
        ],
      },
    },


    // -- Optional Plugin End --//


	// Theme related
	{
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
		basePath: `/`,
		blogPath: `/blog`,
		tagsPath: `/tags`,
		postsPath: `content/posts`,
  		postsPrefix: `/`,
		pagesPath: `content/pages`,
		mdx: true,
		sharp: true,
		formatString: `DD.MM.YYYY`,
		showLineNumbers: true,
		showCopyButton: true,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Posts`,
            url: `https://posts.cv/optimizean`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/optimizean`,
          },
        ],
      },
    },	
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `byte2b: Byte to Brain`,
        short_name: `byte2b`,
        description: `log experiences and give back knowledge as generously as it's received`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: { allPost: IAllPost; site: { siteMetadata: ISiteMetadata } }
            }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `byte2b: Byte to Brain`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

interface IPostTag {
  name: string
  slug: string
}

interface IPost {
  slug: string
  title: string
  defer: boolean
  date: string
  excerpt: string
  contentFilePath: string
  html: string
  timeToRead: number
  wordCount: number
  tags: Array<IPostTag>
  banner: any
  description: string
  canonicalUrl: string
}

interface IAllPost {
  nodes: Array<IPost>
}

interface ISiteMetadata {
  siteTitle: string
  siteTitleAlt: string
  siteHeadline: string
  siteUrl: string
  siteDescription: string
  siteImage: string
  author: string
}

