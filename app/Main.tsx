import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import LatestPosts from './LatestPosts'
import { SiteSummary } from './SiteSummary'


export default function Home({ posts }) {
  return (
    <>
      <SiteSummary />
      <LatestPosts posts={posts} />
    </>
  )
}
