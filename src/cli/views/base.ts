import blessed from 'blessed';

export class Screen {
	private _screen = null;

	constructor() {
		const screen = blessed.screen({ smartSCR: true });

		screen.title = 'Radio station configurator';

		screen.key(['escape', 'C-c'], () => process.exit(0));

		this._screen = screen;
	}

	appendBoxes(boxes) {
		for (const box of boxes) {
			box.on('click', function(data) {
				box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
				this._screen.render();
			  });
			  
			  // If box is focused, handle `enter`/`return` and give us some more content.
			  box.key('enter', function(ch, key) {
				box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
				box.setLine(1, 'bar');
				box.insertLine(1, 'foo');
				this._screen.render();
			  });
			  
			  // Quit on Escape, q, or Control-C.
			  this._screen.key(['escape', 'q', 'C-c'], function(ch, key) {
				return process.exit(0);
			  });

			this._screen.append(box);
		}
	}

	render() {
		return this._screen.render();
	}
}
