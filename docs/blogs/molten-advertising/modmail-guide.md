---
title: Modmail Guide
description: The modmail guide for Molten Advertising (staff only)
---


:::note Guide Overview
In this guide you will learn how to use and operate [Molten Support](https://discord.gg/gbFJm7D7BJ). 

[Molten Support](https://discord.gg/gbFJm7D7BJ)'s prefix is `.` [**period**]
:::

<details className="customdetails">
<summary>🔑 Key</summary>

> `[foo|bar]` - Text separated in brackets means you can use either **foo** or **bar** to get the same command result

> `[arg=value]` - An argument in brackets means this is an **optional argument**, if it's not provided a default value of '**value**' will take it's place

> `<arg>` - An argument in less and greater than signs means that this is a **required argument**, it must be provided or the command will fail

</details>

## Modmail Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <code>.[reply\|r] &lt;message&gt</code> | Reply to a modmail thread (this is an anonymous reply) |
| <code>.[close\|c] <a></a>[time] <a></a>[message]</code> | Close a thread with an optional duration to wait to close the thread (timed close) - `message` will appear on the user's end. This can be 'Have a great day' |
| <code>.alert [member]</code> | Notify yourself or another member of the next thread messaged received |
| <code>.move &lt;name&gt</code> | Move a thread to a category by name |

:::tip
`category_name` can be a shorthand word of a category name.

For example, you can use `.move moderation` to move a thread to the moderation team.

:::


## Snippet Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <code>.[snippet\|s] <a></a>[name] </code> | View all the snippets or send one in the thread by providing `name` |
| <code>.[snippet\|s] add &lt;name&gt &lt;value&gt</code> | (Management Only) Add a snippet |
| <code>.[snippet\|s] remove &lt;name&gt </code> | (Management Only) Remove/delete a snippet |

## Modmail Rules
**1.** When a thread is made, all online staff will get pinged. **To claim a thread, simply say 'mine'**, other staff should obey that you claimed the thread. If you’re inactive in a thread for a few hours when a user responds, they have the right to 'overclaim.'

**2.** There is such a thing as "over-claiming" where you claim a claimed thread. **You can only overclaim if you are a management member and need your serious intervention**, you were asked by the person who originally claimed the ticket to claim or if the person who claimed it isn't responding to your ping after 6 hours. Overclaim for no good reason will get you a strike or your modmail permissions revoked for a duration of time.

**3.** When handling a thread, **remain professional at all times**. **Don't use shortened words** such as "**k**" or "**xD**" or "**lol**". That doesn't look very professional. With this, capitalization and grammar must be used as well. 

**4.** <u>Stay respectful at all times</u>. Everyone must be treated with respect regardless of their words. In this case, ping an online management member.

**5.** If someone reported a member, you aren't supposed to be sharing the actions. Use the proper snippets according to the situation. You may not tell a thread user **any** actions against anyone. If you do this, you may receive a staff strike or your modmail license will be **revoked**.

**6.** Move a thread to the correct team category with `.move <team>`. Please don't handle threads that aren't for your department. 

## Example Situations

<details className="customdetails">
<summary>Situation 1</summary>

> **User:** Hey, I'd like to report a member

*Runs `.snippet report`*

> **You:** 
To report a member, please use this format:
```
User ID:
Reason:
Proof:
```

> **User:**
User ID: 1234567890123456789
Reason: DM advertising
Proof: *(attachment)*

`...`

</details>

<details className="customdetails">
<summary>Situation 2</summary>

> **User:** Can I partner?

*Runs `.move partnership`*

`...`

</details>

<details className="customdetails">
<summary>Situation 3</summary>

> **User:** Why can't I access #lounge?

*Runs `.snippet loungerole`*

> **You:** You can’t talk in the main lounge because you don’t have the correct role. Please read [this](#example-situations) announcement.

> **User:** thanks!

*Runs `.snippet morehelp`*

> **You:** Is there anything else I can help you with today?

> **User:** No, thanks

*Runs `.snippet thanks`*

`...`

*Runs `.close 10m`*

`...`

</details>

## Ready to handle threads?
Message [vNziie--#7777](https://discord.com/users/550476809280421903) on Discord and make sure to say you've read the modmail guide!
