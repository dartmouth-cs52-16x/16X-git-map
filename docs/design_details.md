# Design Task

This task is to help you gain familiarity with Sketch, a powerful UI/UX design application, to get your design chops warmed up before the beginning of the term! And to get set up with Atom and Git.

## Before you begin
1. Download a free trial of Sketch from: https://sketchapp.com.  
2. Watch the short Sketch tutorials on *Introducing Symbols*, *Symbol Resizing*, and *Using Masks*: https://sketchapp.com/learn/.

## Part 1: Design Your Page Using Sketch

### Your page should include 2 sections:
1. Your bio
2. A style guide

### For Your Bio:

The design of your bio should include:

* A picture
* Your name
* Where you’re from/where you live
* A short bio telling us about yourself (you might include/mention: design applications you know, what you enjoy most about ui/ux design, why you’re excited to work with DALI)
* And something interesting about yourself :-)

* Create a complex symbol to use in your design, duplicate the symbol, and use the override option to change information in your symbol.

* Create a mask to crop some content on your page.

### For Your Style Guide:

Your style guide should include:

1. A short description/rationale explaining your design choices
2. Type styles — include the name of the typeface, sizes, styles, and colors used
3. Color palette — include swatches and hex codes


## Part 2: Setup Git & Atom

You'll use Atom and the Github app to submit a JPG of your final design. Follow the instructions below to add your page to the DALI Map!

### Download & Install Atom
Atom is a great code editor, it is cross platform and looks pretty. If you prefer a different editor you can use that one instead. If you already have Atom installed, you can skip this section.

1. Install from http://atom.io

2. Open Atom and then do: Atom -> Install Shell Commands

### Install Github Desktop App & Add The Project Repo
git is a code collaboration tool! If you've previously used git on your computer, you can skip the install step.

1. Install the github app from: https://desktop.github.com/

2. Run the GitHub app, and set it up with your new account.
![Github Account Setup](imgs/github-app-1config.png)

3. Go to Preferences -> Advanced and fill in your information with the same email you used for your github account and then click Install Command Line Tools

4. Clone the 17W-mappy repo: click the + Add a Repository dropdown, select clone, and choose the 17W-mappy
![Cloning a Project Repro](imgs/github-app-2clone-mappy.png)

5. Exit the app

### Add the Project Repo in Atom

In Atom, go to: File -> Add Project Folder, and select the 17w-mappy repo.


## Part 3: Use Git to Publish Your Work
Now you'll use git to add, commit, and push your changes. Git is a code version control system and allows you to have a named log of your changes to the code and a way to work on the same files together with other people. It is sort of like an offline google docs where you *commit* (explicitly name) every set of changes. [Here's a good resource](http://rogerdudler.github.io/git-guide/) but we'll do the basics here.

This is a good overview image for the things you'll be doing — it'll all make sense eventually.

![](imgs/git_data_transport.png)

### Step 1) Add Your Images to Your Local Git Repo

1. Export your page design as a JPG from Sketch
2. Move this file to your local project repro. If you're not sure where Git set this up, you can right-click the 17W-mappy repo in the Git app, and select Open in Finder.
3. Add 2 images to the images directory:
  * A bio pic — must be square, 200 x 200px (this will show up on the map). If you don't have a favorite tool for this try [resizeimage](http://resizeimage.net/)
  * The JPG of the design you created in Sketch

### Step 2) Commit Your Changes
Committing files tells git that you want to name and save the changes you have made as a concrete *changeset*. For now this changeset is only saved locally in your local repository. Commits should represent one logical change in the repo and the commit message should make that change clear.

1. Writ a short summary of the changes you're making/what you're doing, e.g. adding bio images.
2. Click the Commit
3. Sync your changes with the server (this will run a Git pull to update your changes, and then a push to update the server with your changes)


### Step 3) Update the Map and Javascript

Now lets publish that bio pic you uploaded earlier to the DALI Map!

1. Open `main.js` in atom.

2. 🚀Find where we run the method `addMarker` to create a marker for Froggy. Copy that function call and paste it in somewhere in the `SECTION FOR MARKERS`.  

3. Change the `iconUrl` field to point to your bio pic in the images directory

4. Change the `url` field to point to the JPG of the design you created earlier in Sketch!

5. Find a lat long: http://www.latlong.net/

6. Save the file in Atom

7. Commit the changes in Gitapp

8. Sync changes to the server





### 6) Merge Conflicts

At this point after a `git pull` you may get a message that looks like this:

```
CONFLICT (content): Merge conflict in somefile
Automatic merge failed; fix conflicts and then commit the result.
```

This is when the fun starts.  How do you fix this?

The cause for merge conflicts is that you edited the exact same line as someone else and git doesn't know how to automatically resolve that.  This happens and is normal, don't worry.  So to fix you just need to pick apart the conflict and merge it in — continue to the next section to see how this happens!

#### Deciphering Merge Conflicts

If you were to do this by hand, git takes the pretty code you wrote and injects terrible "conflict markers" that look like this:

```
<<<<<<< HEAD
var h = 'hello, world';
=======
var h = 'Hi!';
>>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d
```

where the line between  `<<<HEAD` and `====` is the line/lines of code that are relevant in your file, and between  `====` and `>>>> cb1abc6` are from the remote repository (the repository that you see on github.com). The crazy characters refer to the commit that the change comes from.

Since we've been using Atom so far there is a nice plugin to help visualize this a little better. *Atom -> Preferences -> Install -> search* for merge-conflicts
![merge-conflict](imgs/merge-conflicts.gif)

Once you have your conflict file the way you want it — ie. fixed and without any more of the conflict markers...

- All you have to do to continue is:  `git add thefixedfile` which indicates to git that you have resolved the conflict. Then `git commit` with no options will complete the merge and automatically create a commit message.

### 7) Push Your Commits
**What this does:** Now that you've resolved any conflicts you're ready to push your local changes to the remote repository!

  - 🚀`git push origin gh-pages`
    - `origin` is the remote you are pushing to and is named origin by default
    - `gh-pages` is the branch you are pushing. It happens that because we are hosting this on github.io the default branch is `gh-pages`. Usually you'll be using your own branch or the default which is usually `master`.
    - if this fails, redo step [5](#5\)-Git-Pull)

###You've now published a page!

If you go to https://dali-lab.github.io/17W-mappy/people/yournewpage.html now you'll be able to see your new page.


