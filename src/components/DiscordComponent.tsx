import React, { createContext } from 'react';
import {
	DiscordDefaultOptions,
	DiscordOptionsContext,
	DiscordMessageOptions,
	DiscordMessages,
} from 'discord-message-components/packages/react'

export const defaultOptions: DiscordMessageOptions = {
	...DiscordDefaultOptions,
	profiles: {
		nziie: {
			author: 'vNziie--',
			avatar: '/img/logo.png',
			roleColor: '#00ffff',
		},
        servermanager: {
            author: 'Server Manager',
            avatar: '/img/logo.png',
            roleColor: '#38faff',
            bot: true,
        },
	},
};

interface DiscordComponentProps {
	options?: DiscordMessageOptions
}

const DiscordComponent: React.FC<DiscordComponentProps> = ({options = defaultOptions, children }) => {
	return (
		<DiscordOptionsContext.Provider value={options}>
			<DiscordMessages>
				{children}
			</DiscordMessages>
		</DiscordOptionsContext.Provider>
	);
};

export default DiscordComponent;
