import * as EventEmitter from 'events';
import eventTypes from './eventTypes';

const emitter = new EventEmitter();

emitter.on(eventTypes.ADD_NOTE, (note: INote) => {
  console.info(note);
});

emitter.on(eventTypes.GET_ALL_NOTES, (notes: INote[]) => {
  console.info('get all notes called');
});

export default emitter;
