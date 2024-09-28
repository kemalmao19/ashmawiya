import { useState } from "react";
import { useFetch } from "../hooks/useHooks";
export const Note = ({
  data,
}: {
  data: UserCourse;
}) => {
  const [note, setNote] = useState<string>(data.note);
  const { handleUpdateNote } = useFetch();
  const handleSubmit = () => {
    handleUpdateNote(data.id, { note: note });
  };

  return (
    <div className="">
      <h1 className="text-xl text-black">
        {note === "" ? "Write some notes" : "Your notes"}
      </h1>
      <div className="flex flex-col gap-2">
        <textarea
          value={note}
          name="note"
          placeholder="write some notes..."
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-white border-2"
        />
        <button onClick={() => handleSubmit()}>
          {note === "" ? "add note" : "update note"}
        </button>
      </div>
    </div>
  );
};
