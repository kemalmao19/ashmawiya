import { useContext, useState } from "react";
import { StateContext } from "../../../../../state/context";
export const Note = () => {
  const { state, dispatch } = useContext(StateContext) as ContextType;
  const notes = state.notes.value;
  const [note, setNote] = useState("");
  console.log(notes);
  const addNote = (notes: string[], note: string) => {
    const arr = [...notes];
    arr.push(note);
    dispatch({ type: "Notes", value: arr });
  };
  return (
    <div className="">
      <h1 className="text-xl text-black">Write some note</h1>
      <div className="flex flex-col gap-2">
        <form>
          <textarea
            value={note}
            name="note"
            placeholder="write some notes..."
            onChange={(e) => setNote(e.target.value)}
            className="w-full bg-white border-2"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addNote(notes, note);
              setNote("");
            }}
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
};
