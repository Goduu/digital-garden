import { Post } from "./PostSummary"

export const filterPostsByLocale = (posts: Post[], locale: string) => {
    return posts.filter((post) => post.locale === locale)
}