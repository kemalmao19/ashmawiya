import { useEffect, useState } from "react";
import { updateUserCourse } from "../../../../../utils/fetchHandler";
export const Note = ({
  data,
  userId,
}: {
  data: UserCourse;
  userId: number;
}) => {
  const [note, setNote] = useState<string>(data.note);
  const handleUpdateNote = () => {
    const update = updateUserCourse(data.id);
    update({ note: note })
      .then(() => {
        console.log("Note update was successful.");
      })
      .catch((error) => {
        // Revert state change if the request fails
        alert(error.message);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/api/usercourse/user/${userId}`)
      .then((items) => items.json())
      .then((items) =>
        items.find((item: Record<string, any>) => item.id == data.id)
      )
      .then((item) => setNote(item.note))
      .catch((error) => console.log(error.message));
  }, [data]);

  if (!data) return <div className="">No note</div>;
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
        <button onClick={() => handleUpdateNote()}>
          {note === "" ? "add note" : "update note"}
        </button>
      </div>
    </div>
  );
};
