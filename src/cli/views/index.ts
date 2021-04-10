import { Screen } from 'src/cli/views/base';
import Controls from 'src/cli/views/controls';

import config from 'src/cli/views/viewsConfig';

const appScreen = new Screen();

appScreen.appendBoxes([new Controls(config.controlsConf).box])

appScreen.render();
