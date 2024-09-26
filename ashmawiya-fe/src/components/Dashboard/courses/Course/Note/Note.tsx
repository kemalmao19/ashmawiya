import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useHooks";
export const Note = ({
  data,
  userId,
}: {
  data: UserCourse;
  userId: number;
}) => {
  const [note, setNote] = useState<string>(data.note);
  const { getUserNote, handleUpdateNote } = useFetch();
  const handleSubmit = () => {
    handleUpdateNote(data.id, { note: note });
  };
  useEffect(() => {
    getUserNote(userId, data).then((item) => setNote(item.note));
  }, [data]);

  return (
    <div className="">
      <h1 className="text-xl text-black">Write some note</h1>
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
