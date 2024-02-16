import { siteMetadata } from '@/data/siteMetadata'
import LatestPosts from './Post/LatestPosts'
import { SiteSummary } from './SiteSummary'
import { AuraBeam, AuraBeamVerticalDivider } from 'aura-beam-annotator'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Home({ posts }) {
  return (
    <>
      <AuraBeam>
        <SiteSummary />
        <AuraBeamVerticalDivider color='teal' direction='l-to-r' />
        <LatestPosts posts={posts} />
      </AuraBeam>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
