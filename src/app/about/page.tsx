import { AuthorLayout } from 'src/layouts/AuthorLayout'
import { genPageMetadata } from 'src/app/seo'
import Professional from 'src/components/resume/Articles/Professional'
import Achievements from 'src/components/resume/Articles/Achievements'
import { AdditionalInfo } from 'src/components/resume/Articles/AdditionalInfo'
import { AboutTitle } from '@/components/resume/AboutTitle'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <AboutTitle />
      <div id="pdf-content">
        <AuthorLayout />
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
      </div>
    </>
  )
}
