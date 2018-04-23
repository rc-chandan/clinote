import * as EventEmitter from "events";
import EVENTS from "./eventTypes";

const emitter = new EventEmitter();

emitter.on(EVENTS.ADD_NOTE, (note: INote) => {
  console.info(note);
});

emitter.on(EVENTS.GET_ALL_NOTES, (notes: INote[]) => {
  console.info("get all notes called");
});

export default emitter;
