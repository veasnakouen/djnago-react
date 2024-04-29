import React from "react";
import "./postItemOne.css";
import Link from "next/link";
import Image from "next/image";
import { item } from "../sections/Posts";

const PostItemOne = ({ large, item }: { large: boolean; item: item }) => {
  return (
    <div className={`post-entry-1 ${large ? "lg" : ""}`}>
      <Link href={`postitems/${item._id}`}>
        <img src={`/${item.img}`} alt="" />
      </Link>
      <div className="post-meta">
        <span className="date">{item.category}</span>
        <span className="mx-1">
          <i className="bi bi-dot"></i>{" "}
        </span>{" "}
        <span>{new Date(item.date).toLocaleDateString("en-US")}</span>
      </div>
      <h2>
        <Link href={`postItems/${item._id}`}>{item.title}</Link>
      </h2>
      {large && (
        <>
          <p className="mb-4 d-block">{item.brief}</p>
          <div className="d-flex align-items-center author">
            <div className="photo">
              <img src={`/${item.avatar}`} alt="" />
            </div>
            <div className="name">
              <h3 className="m-0 p-0">{item.author}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostItemOne;
