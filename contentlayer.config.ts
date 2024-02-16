import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer/source-files'
import { writeFileSync } from 'fs'
import readingTime from 'reading-time'
import GithubSlugger from 'github-slugger'
import path from 'path'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins/index.js'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import { siteMetadata } from './data/siteMetadata'
import { MDXDocumentDate, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { AppLocale, locales } from './locale/state'

const root = process.cwd()
const isProduction = process.env.NODE_ENV === 'production'

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  locale: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/")[2],
  },
  toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
}

/**
 * Count the occurrences of all tags across leave posts and write to json file
 */
function createTagCount(allBlogs) {
  // for each locale return an empty object
  const tagCount = locales.reduce((acc, locale) => {
    acc[locale] = {};
    return acc;
  }, {} as Record<AppLocale, Record<string, number>>);

  allBlogs.forEach((file) => {
    const locale = file.locale
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        if (formattedTag in tagCount[locale]) {
          tagCount[locale][formattedTag] += 1
        } else {
          tagCount[locale][formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./app/tag-data.json', JSON.stringify(tagCount))
}

function createSearchIndex(allBlogs) {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    const allBlogsByLocale = allBlogs.reduce((acc, blog) => {
      console.log('blog----', blog)
      if (!acc[blog.locale]) {
        acc[blog.locale] = []
      }
      acc[blog.locale].push(blog)
      return acc
    }, {} as Record<AppLocale, MDXDocumentDate[]>)

    for (const [locale, blogs] of Object.entries<MDXDocumentDate[]>(allBlogsByLocale)) {
      console.log("locale---", locale)
      writeFileSync(
        `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}_${locale}.json`,
        JSON.stringify(allCoreContent(sortPosts(blogs)))
      )
    }
    // writeFileSync(
    //   `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
    //   JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    // )
    console.log('Local search index generated...')
  }
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'leaveNotes/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'json' },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images ? doc.images[0] : siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    twitter: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}))

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'resumee/skills/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'A name for the category of skills',
      required: true,
    },
  },
}))

export const ProfessionalExperience = defineDocumentType(() => ({
  name: 'ProfessionalExperience',
  filePathPattern: 'resumee/professionalExperiences/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Your most recent title at this organization',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'The name of the company or organization you worked with',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'A descriptor of when you started the position',
      required: true,
    },
    technologies: {
      type: 'list',
      description: 'A list with the technologies you used in this position',
      required: true,
      of: { type: 'string' },
    },
    organizationUrl: {
      type: 'string',
      description: 'The url of the organization you worked with',
      required: true,
    },
    endDate: {
      type: 'string',
      description:
        'If you no longer work with this organization, provide a descriptor of when you ended the position',
      required: false,
    },
  },
}))

export const Achievement = defineDocumentType(() => ({
  name: 'Achievement',
  filePathPattern: 'resumee/achievements/*.mdx',
  contentType: 'mdx',
  fields: {
    achievement: {
      type: 'string',
      description: 'The name of the degree or certification of your achievement',
      required: true,
    },
    organization: {
      type: 'string',
      description:
        'The name of the school, organization, or program you earned your achievement from',
      required: true,
    },
    completionYear: {
      type: 'number',
      description: 'The year you earned your achievement',
      required: true,
    },
  },
}))

export const AdditionalInfo = defineDocumentType(() => ({
  name: 'AdditionalInfo',
  filePathPattern: 'resumee/additionalInfo.mdx',
  contentType: 'mdx',
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      description: 'The name of the additional info section',
      required: true,
    },
  },
}))

export const PrivateField = defineDocumentType(() => ({
  name: 'PrivateField',
  filePathPattern: 'resumee/privateFields/*.mdx',
  contentType: 'mdx',
  fields: {
    label: {
      type: 'string',
      description: 'A label to describe the private field',
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [
    Blog,
    Authors,
    Skill,
    ProfessionalExperience,
    Achievement,
    AdditionalInfo,
    PrivateField,
  ],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData()
    createTagCount(allDocuments)
    createSearchIndex(allDocuments)
  },
})
