import { Authors, allAuthors } from '@contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Skills from '@/components/resume/Articles/Skills'
import Professional from '@/components/resume/Articles/Professional'
import Achievements from '@/components/resume/Articles/Achievements'
import { AdditionalInfo } from '@/components/resume/Articles/AdditionalInfo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <div className="container">
          <div className="mt-5">
            <Skills />
          </div>
        </div>
      </AuthorLayout>
      {/* <div className="space-y-2 pb-8 pt-6 md:space-y-5"> */}
      <div className="prose max-w-none space-y-2 pb-8 dark:prose-invert md:space-y-5 xl:col-span-2">
        <div className="mt-5">
          <Professional />
        </div>
        <div className="mt-5">
          <Achievements />
        </div>
        <div className="mt-5">
          <AdditionalInfo />
        </div>
      </div>
    </>
  )
}
