import { AuthorLayout } from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import Professional from '@/components/resume/Articles/Professional'
import Achievements from '@/components/resume/Articles/Achievements'
import { AdditionalInfo } from '@/components/resume/Articles/AdditionalInfo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
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
    </>
  )
}
