import siteMetadata from '@/data/siteMetadata'
import LatestPosts from './LatestPosts'
import { SiteSummary } from './SiteSummary'
import { AuraBeamAnnotator, AuraBeamAnnotatorContainer, AuraBeamVerticalDivider } from 'aura-beam-annotator'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Home({ posts }) {
  return (
    <>
      <AuraBeamAnnotatorContainer>
        <SiteSummary />
        <LatestPosts posts={posts} />
      </AuraBeamAnnotatorContainer>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
