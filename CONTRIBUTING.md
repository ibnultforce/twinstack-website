# Working together on this repo

This is the template every customer site is copied from. **Every push to
`master` is offered to every customer site as an update**, so `master` only
gets finished, checked work.

1. **Never commit to `master` directly.** Branch from the latest `master`
   (`git checkout -b <your-name>/<short-task>`) and open a pull request.
   (GitHub can't enforce this on a private repo on the free plan, so it's on us.)
2. **Before merging, run `npm run check` locally** (build plus `check.js`).
3. **Keep your branch current** with `git pull --rebase origin master`, keep
   branches small, and say in the team chat which area you're working on.
4. **Flags and file names the web app looks for are a contract.** The web app
   (`twinstack-web`) detects features by searching these scripts for literal
   strings (`--proposal=`, `--from-html`, `--chrome`, `--own-chrome`,
   `TWINSTACK_TASK_SIZE`, `customHead`, `nav.appearance`…). Renaming one
   silently turns the feature off for every site.
5. **Line endings are handled by `.gitattributes`** (LF for everyone).
