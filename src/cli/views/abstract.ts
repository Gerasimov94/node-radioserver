import blessed from 'blessed';

class TerminalBox {
	box = null;

	constructor(config: blessed.Widgets.BoxOptions) {
		this.box = blessed.box(config);
	}
}

export default {
	TerminalBox,
}
