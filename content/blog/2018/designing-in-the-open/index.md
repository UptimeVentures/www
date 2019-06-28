+++
caption = "Image courtesy of @rawpixel on Unsplash"
category = ["Open Design", "View Source"]
date = "2018-03-11"
draft = false
illustration = "feature.jpg"
illustrationDescription = "Workers holding a planning session with coffee around a worktable covered in a map, laptop, camera, and small potted succulents."
layout = "post"
title = "Designing In The Open"
author = "Nicholas Young"
+++
As artists mature, a critical phase is growing comfortable with showing our work. Despite the fact that artists who design for web audiences hit this stage even faster than most, with an incoming mix of criticism on both artistic choice and functional attributes, the truth is I've been uncomfortable with this concept for years.

I haven't necessarily shied away from it, though. Releasing once-internal code as open source was critical in my past work, and continues to be a priority here at [Uptime Ventures.][uv] Still, I believe there is more we can do. With the rise of developer quickstart programs, it feels like knowledge is to be extracted and offered for sale.

As a senior consultant, I'm concerned how this industry trend plays against a backdrop of increasingly powerful (and accessible) tools that are accelerating the pace of software development.

## Show Your Work

Anecdotally, experiences in the classroom have taught me, from the teacher's desk, it appears that students who prepare to display and explain their work from the onset are most likely to find a career in design. Letting a trusted advisor or friend in on how your process operates is a terrifying prospect for most, but it often dispels confusion and opens your mind to fresh possibilities. Some designers even invite collaborators in shortly after the idea is formed. This gradual exposure of ideas to real-world constraints is often described as "[open design][open-design]."

I'm far from the only one to write on this topic. The same concept has been covered in [Basecamp's *Signal vs. Noise* blog][svn], and Brad Frost again mentioned it again in a post explaining how the web presence of [Greater Pittsburgh Community Food Bank was designed "in the open" as well.][frost] Both of these posts are bookmarked, so when I need inspiration or courage, it's on tap.

Re-reading these dispatches in the midst of my own redesign, I felt the call to implement design transparency principals much stronger than in the past. I also realized that as a small company working on systems that are designed for high availability and airtight security, it is the safest choice we could make. That is why [Uptime Ventures][uv] is fully embracing [open design][open-design] as a core tenet of how we do business. Creating a product "in the open," forgoing all but essential privacy and IP concerns, is now our default.

Our web presence is, as of this writing, admittedly spartan. That too is by design.

## Implementing Open Design

Several weeks ago, as I planned the redesign (and ultimate completion) of this site, Tom Dale, a recognized engineering prognosticator, posed an [unexpectedly controversial question.][tom-dale-q] He asks, "Can we agree, in 2018, human readable 'view source' is a constraint the web can discard?" I've explored this question at length myself while adopting modern development practices over the last five years, and finally arrived at the conclusion we not only can, but should.

To be clear, neither of us advocate removing the web platform's standard ability to inspect application state at runtime; far from it. Much of the web has always operated on text-based protocols, but as concerns for network reliability and performance take center stage, [binary formats are stepping in to aid distribution.][wasm]

Since I began developing for web audiences in the mid-90's, change has been the only constant. Web developers have always been an adaptable breed of engineer; if I wasn't exploring syntax improvements for HTML documents, I was implementing dynamic behavior in JavaScript, while being mindful of browser support. Recent developments, such as React's "Virtual DOM", have introduced new layers of abstraction, allowing us to build faster and with more confidence than ever before. Developer tools are slowly catching up, creating a smooth experience for all who write software. In the future, software will envision, build, and optimize itself; no human interaction required.

Open binary formats empower this brand of radical market disruption, [and erase Western bias in critical systems.][tom-dale-w]

Sounds good, right? There's one more hurdle we must clear: developer experience. Last year, SitePoint declared, ["Modern JavaScript Development is Hard"][sitepoint]&mdash; and they're right!&mdash; I've watched developers struggle to understand essential frontend tools even before the dawn of "modern" JavaScript. Yet, despite mounting evidence, some will argue binaries violate existing best practices, and are thus harmful.

Can we resolve this final concern by applying principals of open design?

In a word: yes. The blog you're reading at this very moment, and several programs that I'll mention later, indicate we believe so.

## Next Steps

When this blog originally launched, I described a working relationship with our tools, stating that *how and why technologies are implemented is perhaps more important than the technologies themselves.* At the time, I failed to realize the impact that vision would leave on our work.

Going forward, I'm working on a series of articles detailing the tools and practices we use here at [Uptime Ventures.][uv] We're also preparing a series of guides to help new developers cut though the static. Training curricula to address the constantly advancing needs of seasoned teams is on the horizon.

Open design is the only way forward.

[uv]: /
[svn]: https://signalvnoise.com/posts/2928-designing-in-the-open
[frost]: http://bradfrost.com/blog/post/designing-in-the-open/
[open-design]: https://en.wikipedia.org/wiki/Open_design
[tom-dale-q]: https://twitter.com/tomdale/status/965681976199077889
[tom-dale-w]: https://twitter.com/tomdale/status/966045543112871937
[sitepoint]: https://www.sitepoint.com/modern-javascript-development-hard/
[wasm]: http://webassembly.org/ 
