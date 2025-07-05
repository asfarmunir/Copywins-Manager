"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { FiImage, FiLink, FiVideo, FiX } from "react-icons/fi";

export const CreatePostDialog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-card-foreground text-sm 3xl:text-base font-semibold border rounded-full px-4 py-2 2xl:px-5 3xl:px-6">
          Create Post
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl rounded-lg">
        <DialogHeader className="pt-5 px-4">
          <DialogTitle className="text-left text-xl font-bold pb-4 border-b">
            Create post
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 space-y-0">
          <div className="space-y-0">
            <input
              type="text"
              placeholder="Title (optional)"
              className="w-full px-4  rounded-lg focus:outline-none focus:ring-0 text-2xl bg-transparent  placeholder:text-foreground"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <textarea
              placeholder="Write something..."
              className="w-full px-4 py-3  rounded-lg focus:outline-none bg-transparent focus:ring-0 min-h-[150px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center ">
              <button className="p-2 rounded-full hover:bg-card-foreground transition-colors">
                <FiImage className="text-gray-600 text-xl dark:text-slate-200" />
              </button>
              <button className="p-2 rounded-full hover:bg-card-foreground transition-colors">
                <FiVideo className="text-gray-600 text-xl dark:text-slate-200" />
              </button>
              <button className="p-2 rounded-full hover:bg-card-foreground transition-colors">
                <FiLink className="text-gray-600 text-xl dark:text-slate-200" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                className={`px-8 py-2 rounded-full text-sm text-white ${
                  true
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-gray-400 cursor-not-allowed"
                } transition-colors`}
                // disabled={!content}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
