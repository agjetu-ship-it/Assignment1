import { BlogCard, BlogTitle, MinuteToReadTime } from "./blogCard.js"
export function ArpaNetBlogCard() {
    return <BlogCard>
                <BlogTitle>ARPANET</BlogTitle>
                <img className="maxImageSize" src="https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg"></img>
                <MinuteToReadTime mins={2}/>
            </BlogCard>
}