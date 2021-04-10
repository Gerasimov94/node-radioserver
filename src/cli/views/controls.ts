import { KEYCODES } from 'src/constants';
import AbstractClasses from 'src/cli/views/abstract';
import blessed from 'blessed';

export default class Controls extends AbstractClasses.TerminalBox {
	constructor(config: blessed.Widgets.BoxOptions) {
		super(config);
		this.setPlaylistTips();
	}

	setPlaylistTips() {
		this.box.content = 
			`${KEYCODES.FOCUS_QUEUE} - focus queue | ${KEYCODES.SCROLL_UP} - go up\n` +
			`${KEYCODES.QUEUE_ADD} - enqueue song | ${KEYCODES.SCROLL_DOWN} - go down\n`;
	}

	setQueueTips() {
		this.box.content = `${KEYCODES.MOVE_UP} - move song up | ${KEYCODES.SCROLL_UP}-go up` +
		`${KEYCODES.MOVE_DOWN} - move song down | ${KEYCODES.SCROLL_DOWN}-go down` +
		`${KEYCODES.FOCUS_PLAYLIST} - focus playlist | ${KEYCODES.QUEUE_REMOVE} - dequeue son`;
	}
}