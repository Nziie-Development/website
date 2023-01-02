---
title: Forms
description: A showcase of my Discord Forms/application system
---
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
  DiscordEmbedField
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";
import Admonition from '@theme/Admonition';

---

| Usage | Description |
| ----------------------- | ----------- |
| <span className="mention">/forms create</span> | Create a form through a menu |
| <span className="mention">/forms edit</span> | Edit a form |
| <span className="mention">/forms delete</span> | Delete a form by name |
| <span className="mention">/form</span> | Fill out a form |
| <span className="mention">/apply</span> | Alias for <span className="mention">/form</span> |

<details className="customdetails">
<summary>Images</summary>

<img src="/img/forms1.png" className="betterimage"/>
<p className="caption">DM sent when accepted (message customizable)</p>

<img src="/img/forms2.png" className="betterimage"/>
<p className="caption">Managing a form</p>

<img src="/img/forms4.png" className="betterimage"/>
<p className="caption">Filling out a form (in DMs)</p>

<img src="/img/forms3.png" className="betterimage"/>
<p className="caption">Completed a form</p>

<img src="/img/forms5.png" className="betterimage"/>
<p className="caption">Editing a form</p>

</details>