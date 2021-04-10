const commonConfig = {
	border: { type: 'line' }
} as const;

const childCommonConfig = {
	width: '100%',
	height: 1,
	left: 0
} as const;

export default {
	playlistConf: {
		bgFocus: 'black',
		bgBlur: 'green',
		config: {
			...commonConfig,
			top: 0,
			left: 0,
			width: '50%',
			height: '100%',
			scrollable: true,
			label: 'Playlist',
			style: {
				fg: 'white',
				bg: 'green',
				border: {
					fg: '#f0f0f0'
				}
			}
		},
		childConfig: {
			...childCommonConfig,
			fg: 'white',
			bg: 'green'
		}
	},
	controlsConf: {
		...commonConfig,
			top: '85%',
			left: '50%',
			width: '50%',
			height: 5,
			scrollable: true,
			label: 'Controls',
			style: {
				fg: 'grey',
				bg: 'black',
				border: {
					fg: '#000000'
				}
			}
	}
} as const;
