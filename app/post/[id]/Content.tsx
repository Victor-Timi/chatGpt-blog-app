"use client";

import { FormattedPost } from "@/app/types";
import React, { useState } from "react";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenuBar from "./EditorMenuBar";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempcontent, setTempContent] = useState<string>(content);

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
  });

  const handleSubmit = () => {};

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* BREADCRUMBS */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title} `}</h5>

      {/* CATEGORY AND EDIT */}
      <div className="flex justify-between items-center">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          {post.category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button onClick={() => handleIsEditable(!isEditable)}>
                <XMarkIcon className="h-6 w-6 text-accent-red" />
              </button>
            </div>
          ) : (
            <button onClick={() => handleIsEditable(!isEditable)}>
              <PencilSquareIcon className="h-6 w-6 text-accent-red" />
            </button>
          )}
        </div>
      </div>
      {/* Blog Content Editor */}
      <form onSubmit={handleSubmit}>
        {/* header */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p3 w-full"
                placeholder="title"
                onChange={handleOnChangeTitle}
                value={title}
              ></textarea>
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            {" "}
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{post.createdAt}</h6>
          </div>
        </>
        {/* image */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 85vw,
          (max-width: 1060px)75vw,
          33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Tip tap */}
        <div
          className={
            isEditable
              ? "border-2 rounded-md bg-wh-50 p-3"
              : "w-full max-w-full"
          }
        >
          {isEditable && (
            <>
              <EditorMenuBar editor={editor} />
              <hr className="border-1 mt-2 mb-5" />
            </>
          )}
          <EditorContent editor={editor} />
        </div>
        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
        {/* SOCIAL LINKS */}
        <div className="hidden md:block mt-10 w-1/3">
          <SocialLinks isDark />
        </div>
      </form>
    </div>
  );
};

export default Content;
