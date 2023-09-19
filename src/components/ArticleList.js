import blogData from "../data/blog.js"
import Article from "./Article.js"

export default function ArticleList () {
const post = blogData.posts.map(({id, title, date, preview})=> {
    return <Article key={id} title={title} date={date} preview={preview}  />
})
    return (<main>
        {post}
    </main>)
}