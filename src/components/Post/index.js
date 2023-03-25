import React from "react";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";

export default function Post() {
    const params = useParams();
    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if(!post) {
        return <h1>Post não encontrado...</h1>
    }

    return (
        <ModelPost
            coverPhoto={`/assets/posts/${post.id}/capa.png`}
            title={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>

            </div>
        </ModelPost>
    )
}