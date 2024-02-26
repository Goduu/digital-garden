import siteMetadata from 'src/data/siteMetadata'
import LatestPosts from '../components/Post/LatestPosts'
import { SiteSummary } from './SiteSummary'
import { AuraBeam, AuraBeamVerticalDivider } from 'aura-beam-annotator'
import { NewsLetter } from 'src/components/NewsLetter'

export default function Home({ posts }) {
  return (
    <>
      <AuraBeam>
        <SiteSummary />
        <LatestPosts posts={posts} />
      </AuraBeam>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsLetter />
        </div>
      )}
    </>
  )
}
