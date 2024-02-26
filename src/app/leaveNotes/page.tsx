"use client"
import ListLayout from 'src/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from '@contentlayer/generated'
import { filterPostsByLocale } from 'src/components/Post/filterPostsByLocale'
import { useLocale } from 'src/locale/useLocale'

const POSTS_PER_PAGE = 5

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const { locale } = useLocale()
  const localizedPosts = filterPostsByLocale(posts, locale)
  const pageNumber = 1
  const initialDisplayPosts = localizedPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(localizedPosts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={localizedPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Leaves"
    />
  )
}
