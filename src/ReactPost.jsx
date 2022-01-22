import { useState } from "react";
import PostLiked from "./PostLiked";

const ReactPost = ({ question, answer }) => {
    //  console.log(props);
    const [like, setLike] = useState(false);
    return (
        <div>
            <p style={{ border: "1px solid black", padding: "10px", backgroundColor: "powderblue", margin: "10px" }}>
                <h1 style={{ color: "indianred" }}>{question}</h1>
                <h3 style={{ color: "darkgoldenrod" }}>{answer}</h3>
                <button className={like ? "hide" : "show"} onClick={() => { setLike(!like) }}>Like</button>
                {/* If Like is true, then show PostLiked component */}
                {like && <PostLiked />}

            </p>
        </div>
    )
}

export default ReactPost;