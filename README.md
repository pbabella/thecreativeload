# The Creative Load: shared board (Netlify)

One board for the whole team. Everyone who opens the link sees the same
projects, and changes show up for everyone within about 20 seconds.

This version needs a small back end (a Netlify Function + Netlify Blobs), so it
cannot be deployed by dragging a folder onto Netlify. Use ONE of the two ways below.

## Way 1: GitHub (no command line)
1. Create a free account at github.com and make a new repository (private is fine).
2. Click "uploading an existing file" and drag in everything in this folder
   (public, netlify, netlify.toml, package.json, README.md). Commit.
3. In Netlify: Add new site > Import an existing project > GitHub > pick the repository.
   Leave the settings as they are (netlify.toml already has them) and click Deploy.
4. Later updates: replace the files in GitHub and Netlify redeploys by itself.

## Way 2: Netlify command line
    npm install -g netlify-cli
    cd this-folder
    npm install
    netlify login
    netlify init        (or: netlify link, to use an existing site)
    netlify deploy --prod

## Good to know
- The first person to open the new site sends the starter board to the server.
  After that the server copy is the one everyone sees.
- To keep your current projects: open the OLD site, click the 💾 button,
  download a backup, then on the NEW site click 💾 and restore it.
- Anyone with the link can edit. Do not share it outside the team.
- If two people save at the same moment, the last save wins.
- Use "Presentation view" for the TV; press Esc to leave fullscreen.
