export type BlogParagraphBlock = {
    type: 'paragraph'
    text: string
    className?: string
}

export type BlogHeadingBlock = {
    type: 'heading'
    level: 2 | 3
    text: string
    id?: string
}

export type BlogListBlock = {
    type: 'list'
    style: 'bullet' | 'number'
    items: string[]
}

export type BlogImageBlock = {
    type: 'image'
    src: string
    alt: string
    width?: number
    height?: number
    caption?: string
}

export type BlogQuoteBlock = {
    type: 'quote'
    text: string
    author?: string
}

export type BlogContentBlock =
    | BlogParagraphBlock
    | BlogHeadingBlock
    | BlogListBlock
    | BlogImageBlock
    | BlogQuoteBlock

export type BlogAuthor = {
    name: string
    image: string
}

export type BlogPost = {
    slug: string
    title: string
    excerpt?: string

    publishedAt: string
    displayDate: string

    category: string
    readingTime: string

    coverImage: string
    coverImageAlt: string

    author: BlogAuthor

    content: BlogContentBlock[]
}