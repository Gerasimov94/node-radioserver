import blessed from 'blessed';

export default class MainView {
	private _screen = null;

	constructor() {
		const screen = blessed.screen({ smartSCR: true });

		screen.title = 'Radio station configurator';

		screen.key(['escape', 'C-c'], () => process.exit(0));

		this._screen = screen;
	}

	appendBoxes(boxes) {
		for (const box of boxes) {
			this._screen.append(box);
		}
	}

	render() {
		this._screen.render();
	}
}
