---
name: timco-stop-guidance
enabled: true
event: stop
action: warn
---

TimCo website workflow: No local dev server required here.

- Review changes at **localhost:5200** (run `npm run dev` in `website/` if needed)
- Deploy to production: `git push origin prod` triggers Cloud Build → Cloud Run
- Live site: **timmattingly.com**

No slot or preview tool needed for this project.
