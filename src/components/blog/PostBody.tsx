import Markdoc, { Tag, type Config, type Node } from "@markdoc/markdoc";
import Image from "next/image";
import React from "react";

/**
 * A photo in a post. The editor doesn't record image sizes, so the image is
 * laid out at the column's width with its height following the file, and the
 * optimizer still sends a resized copy rather than the original upload.
 */
function PostImage({ src, alt, title }: { src: string; alt?: string; title?: string }) {
  const image = (
    <Image
      src={src}
      alt={alt ?? ""}
      width={0}
      height={0}
      sizes="(min-width: 1060px) 960px, 100vw"
      // Width comes from .post-body in globals.css: the column's full width.
      className="h-auto"
    />
  );
  if (!title) return image;
  return (
    <figure>
      {image}
      <figcaption>{title}</figcaption>
    </figure>
  );
}

/** Photos laid side by side; on a phone they stack. */
function PostGallery({ children }: { children: React.ReactNode }) {
  return <div className="post-gallery">{children}</div>;
}

/** The video ID from any of YouTube's link shapes. */
function youTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
}

/**
 * A YouTube video, from youtube-nocookie.com: YouTube sets no tracking cookies
 * until the visitor actually presses play.
 */
function YouTube({ url, title }: { url: string; title?: string }) {
  const id = youTubeId(url);
  if (!id) return null;
  return (
    <div className="post-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title || "YouTube video"}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

/** True when a paragraph holds one photo and nothing else. */
function isLoneImage(node: Node): boolean {
  const inline = node.children.length === 1 ? node.children[0] : undefined;
  const parts = inline?.type === "inline" ? inline.children.filter((c) => !(c.type === "text" && !String(c.attributes.content).trim())) : [];
  return parts.length === 1 && parts[0].type === "image";
}

const MARKDOC_CONFIG: Config = {
  tags: {
    gallery: { render: "PostGallery" },
    youtube: {
      render: "YouTube",
      selfClosing: true,
      attributes: { url: { type: String, required: true }, title: { type: String } },
    },
  },
  nodes: {
    image: {
      render: "PostImage",
      attributes: { src: { type: String }, alt: { type: String }, title: { type: String } },
    },
    // A photo on its own line comes out as a figure, not inside a <p>: a
    // paragraph can't legally contain a figure, and React would refuse it.
    paragraph: {
      transform(node, config) {
        const children = node.transformChildren(config);
        return isLoneImage(node) ? children : new Tag("p", node.transformAttributes(config), children);
      },
    },
  },
};

export function PostBody({ node }: { node: Node }) {
  const tree = Markdoc.transform(node, MARKDOC_CONFIG);
  // Markdoc wraps a document in <article>; the page already has one, and the
  // spacing rules in .post-body expect the blocks as direct children.
  const blocks = Tag.isTag(tree) && tree.name === "article" ? tree.children : tree;
  return (
    <div className="post-body">
      {Markdoc.renderers.react(blocks, React, { components: { PostImage, PostGallery, YouTube } })}
    </div>
  );
}
