# The phone that wouldn’t stop

## 1. Set the rule

Fox: “You run a group-chat app. Dev needs a door code now. Sana is trying to sleep. Set the group’s notification rule.”

Two phones sit beside the same group chat.

Dev: “Ping me with the code. I’m outside.”
Sana: “Keep the dinner chat quiet. I’ll read it tomorrow.”

**This tiny simulation follows these rules:**
- A message reaches only the named recipient’s phone.
- A ping makes that person read it immediately.
- A silent message stays unread until tomorrow.
- Every message is either **Time-sensitive** or **Can wait**; these labels are already accurate in this game.

Two queued messages:
- **Dev · Door code: 4821 · Time-sensitive**
- **Sana · Shall we order pizza? · Can wait**

Current control: **One rule for every message**.
Move the switch to **Ping** or **Silent**, then press **Send both**. Neither is selected initially.

### If Ping
Both messages enter their phones. Dev’s screen lights up; his door opens. Sana’s screen lights up; her eyes open.

**Dev: Inside. Sana: Woken.**

Fox: “Dev got inside. The same rule woke Sana for tomorrow’s conversation.”

### If Silent
Both messages enter their phones without lighting them. Dev stays outside beside the unread code; Sana stays asleep beside the unread dinner message.

**Dev: Still outside. Sana: Asleep.**

Fox: “Sana stayed asleep. The same rule left Dev outside with an unread code.”

## 2. What would you change?

The two phones and their results stay visible.

Fox: “What would you change about the rule?”

Reflection prompt only; no text field or grading. Button: **See the problem**.

Fox: “One switch made unlike messages behave alike. We need to distinguish what can wait.”

**Contextual needs — what someone needs can change with the situation.**

Fox: “Dev isn’t always the ‘ping me’ person. Sana isn’t always the ‘leave me alone’ person.”

Button: **Split the rule**.

## 3. The next night

Fox: “Tonight Sana is outside waiting for the code. Dev is asleep. Configure a rule that gets Sana inside without waking Dev.”

Same two phones, new queued messages:
- **Sana · Door code: 7392 · Time-sensitive**
- **Dev · Which film tomorrow? · Can wait**

The same simulation rules remain visible. This is a new night; first-night results do not carry over.

Two switches, both initially unselected:
- **Time-sensitive → Ping / Silent**
- **Can wait → Ping / Silent**

Fox: “These rules follow the message type, whoever receives it.”

Button **Send both** becomes available after both switches are set.

### If Ping / Ping
Sana reads the code and enters. Dev wakes and reads the film question.

**Sana: Inside. Dev: Woken.**

Fox: “Sana got inside. Your ‘Can wait’ rule still woke Dev.”

### If Ping / Silent
Sana reads the code and enters. Dev’s unread film message waits while he sleeps.

**Sana: Inside. Dev: Asleep.**

Fox: “The code got through. The film question waited. You handled the situation, not a permanent label for each person.”

### If Silent / Ping
Sana’s code stays unread and she stays outside. Dev wakes and reads the film question.

**Sana: Still outside. Dev: Woken.**

Fox: “The code waited, but the film question interrupted. Your two rules are working against tonight’s needs.”

### If Silent / Silent
Both messages stay unread. Sana stays outside; Dev sleeps.

**Sana: Still outside. Dev: Asleep.**

Fox: “Dev stayed asleep. Your ‘Time-sensitive’ rule also silenced Sana’s code.”

Every result offers **Adjust rule**, reopening the same two switches and resetting this night’s phones before resending. It also offers **Finish opening**. If either goal was missed, Finish first shows a labelled “Worked example”: Time-sensitive → Ping and Can wait → Silent. Replay this new attempt: Sana receives the code and enters; Dev stays asleep. Fox: “Let the code through. Leave the film question for tomorrow.” Do not label the earlier unsuccessful move correct.

## 4. Stop

Fox: “A useful product rule can follow the situation. Check what distinguishes the needs before making one rule for everyone.”

**Opening complete.**

**Stop here**

Next: “What if someone marks every message time-sensitive?”

## Author notes

Independent revised candidate; original bottleneck draft preserved separately. No other designer output consulted. Original fictional model, not sourced user behavior. Objective: distinguish context-dependent needs from permanent user labels when configuring product rules. Target: roughly one minute; not timed. Two committed moves; nine taps without reflection typing or retries: two first-move taps, two discovery taps, three second-move taps, Finish, Stop. A correction adds Adjust, changed switches, and Send. No code or human evidence. Above text contains every branch. Switches alone determine reading; only code-reading opens a door, and any ping wakes a sleeping recipient. Silent never opens a door before tomorrow. Reduced motion must show identical settled phone, door, and sleep states. Corrections inherited: rules precede action, stable role, specific response, visible consequences, no report arithmetic or decorative rewards. Reason to continue: who controls urgency can undermine this rule. Risk: accurate labels make the second move obvious; this may teach a useful distinction yet still feel too easy. Independent review and an uncoached human attempt remain necessary; no enjoyment or learning claim.
