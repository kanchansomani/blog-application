import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "./../../data"

function BlogView() {
  const { id } = useParams()

  const selectedBlog = blogs.find((blogObject) => blogObject.id===id)
    
      return (
        <div className="main-container">
          <h1 className="main-title">{selectedBlog.title}</h1>
          <p >
            <img src={selectedBlog.author.avatar} alt="author" height={"40px"} />
            {selectedBlog.author.name} | {selectedBlog.date}
          </p>
          <p className="main-content">
          {selectedBlog.content}
          </p>
        </div>
      )
    }
  
    export default BlogView
