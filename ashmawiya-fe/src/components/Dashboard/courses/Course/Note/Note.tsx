import { useState } from "react";
import { useFetch } from "../hooks/useHooks";
import Markdown from "react-markdown";

export const Note = ({
  data,
}: {
  data: UserCourse;
}) => {
  const [note, setNote] = useState<string>(data.note);
  const [preview, setPreview] = useState<boolean>(true);
  const { handleUpdateNote } = useFetch();
  const handleSubmit = () => {
    handleUpdateNote(data.id, { note: note });
  };

  return (
    <>
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-xl text-base-content">
          {note === "" ? "Write some notes" : "Your notes"}
        </h1>{" "}
        <div className="flex gap-2">
          {preview ? (
            <p
              className="btn p-2 btn-active"
              onClick={() => setPreview(!preview)}
            >
              EDIT
            </p>
          ) : (
            <p
              className="btn p-2 bg-active"
              onClick={() => setPreview(!preview)}
            >
              PREVIEW
            </p>
          )}
        </div>
      </div>
      {preview ? (
        <Markdown>{note}</Markdown>
      ) : (
        <div className="flex flex-col gap-2">
          <a
            target="_blank"
            href="https://www.markdownguide.org/cheat-sheet/"
            className="link link-hover text-info text-xs"
          >
            you can write using markdown
          </a>
          <textarea
            value={note}
            name="note"
            placeholder="write some notes..."
            onChange={(e) => setNote(e.target.value)}
            className="bg-base-200 textarea-xl border-2 p-4"
          />
          <button onClick={() => handleSubmit()} className="btn btn-primary">
            {note === "" ? "add note" : "save"}
          </button>
        </div>
      )}
    </>
  );
};
