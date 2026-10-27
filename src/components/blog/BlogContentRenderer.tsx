import Image from 'next/image'
import type { BlogContentBlock } from '@/types/blog'

type BlogContentRendererProps = {
    content: BlogContentBlock[]
}

const BlogContentRenderer = ({
    content,
}: BlogContentRendererProps) => {
    return (
        <>
            {content.map((block, index) => {
                const blockKey = `${block.type}-${index}`

                switch (block.type) {
                    case 'paragraph':
                        return (
                            <p
                                key={blockKey}
                                className={`blog-content-paragraph text-20 font-normal ${block.className ?? ''
                                    }`}
                            >
                                {block.text}
                            </p>
                        )

                    case 'heading':
                        if (block.level === 2) {
                            return (
                                <h2
                                    key={blockKey}
                                    id={block.id}
                                    className="blog-content-heading blog-content-heading-h2 h3 font-semibold"
                                >
                                    {block.text}
                                </h2>
                            )
                        }

                        return (
                            <h3
                                key={blockKey}
                                id={block.id}
                                className="blog-content-heading blog-content-heading-h3 font-semibold"
                            >
                                {block.text}
                            </h3>
                        )

                    case 'list': {
                        if (block.style === 'number') {
                            return (
                                <ol
                                    key={blockKey}
                                    className="blog-content-list blog-content-number-list"
                                >
                                    {block.items.map((item, itemIndex) => (
                                        <li
                                            key={`${blockKey}-${itemIndex}`}
                                            className="text-20 font-normal"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ol>
                            )
                        }

                        return (
                            <ul
                                key={blockKey}
                                className="blog-content-list blog-content-bullet-list"
                            >
                                {block.items.map((item, itemIndex) => (
                                    <li
                                        key={`${blockKey}-${itemIndex}`}
                                        className="text-20 font-normal"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )
                    }

                    case 'image':
                        return (
                            <figure
                                key={blockKey}
                                className="blog-content-image-wrapper"
                            >
                                <Image
                                    className="blog-content-image"
                                    src={block.src}
                                    alt={block.alt}
                                    width={block.width ?? 1200}
                                    height={block.height ?? 700}
                                    sizes="(max-width: 839px) 100vw, 1000px"
                                />

                                {block.caption && (
                                    <figcaption className="blog-content-image-caption">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        )

                    case 'quote':
                        return (
                            <blockquote
                                key={blockKey}
                                className="blog-content-quote"
                            >
                                <p className="text-20 font-medium">
                                    {block.text}
                                </p>

                                {block.author && (
                                    <cite className="blog-content-quote-author">
                                        {block.author}
                                    </cite>
                                )}
                            </blockquote>
                        )

                    default:
                        return null
                }
            })}
        </>
    )
}

export default BlogContentRenderer