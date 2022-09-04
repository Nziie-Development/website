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
          moltensutilities: {
            author: "Molten's Utilities",
            avatar: '/img/moltensutilities.png',
            roleColor: '#5865f2',
            bot: true,
          },
          moltensupport: {
            author: 'Molten Support',
            avatar: '/img/moltensupport.png',
            roleColor: '#ff0000',
            bot: true,
          },
          member: {
            author: 'Member',
            avatar: 'blue',
          },
          modmail: {
            author: 'Modmail',
            avatar: 'red',
            bot: true,
          },
          wumpus: {
            author: 'Wumpus',
            avatar: '/img/wumpus.png'
          },
          wumpusmanager: {
            author: 'Wumpus Manager',
            avatar: '/img/wumpusmanager.png',
            bot: true,
            roleColor: '#5865f2'
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
