import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post() {
    const param = useParams();

    console.log(param)
    return "Post"
}