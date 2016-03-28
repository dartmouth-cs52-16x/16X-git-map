# DALI GITivity #

## Overview 

*  In your groups, each person will use git to clone a version of your teams git repository.  
*  Then you'll edit some markdown in the readme.md file.
*  Each person should add themselves into the team section.
*  Then you'll commit and merge your changes of the page with your teammates and push your changes to the git repo.

  This mostly assumes that you are using a recent version of OS X, so your mileage may vary. 

![](imgs/square.png) indicates a step to do. 

##1)  Tools

* ###[atom.io](http://atom.io)

  is a great code editor, it is cross platform and looks pretty.
  <br>![](imgs/square.png) 1.0)  install from [atom.io](http://atom.io)
  <br>![](imgs/square.png) 1.1)  open Atom and then do: *Atom -> Install Shell Commands*

* ###[git+github](http://www.github.com)
  git is a code collaboration tool but also will allow us to use github to host our pages! If you already have github then you can skip this step.
  
  <br>![](imgs/square.png) 1.2)  Go to [github.com](http://github.com) and create an account if you don't have one already!
  <br>![](imgs/square.png) 1.3)  Install the github app from here: [Mac](http://mac.github.com) or [PC](http://windows.github.com). If you are a developer, we recommend using the CLI (command line) version of git just to familiarize youreself more with the shell.
  <br>![](imgs/square.png) 1.4)  Run *GitHub* app, and set up with your new account.
  <br>![](imgs/square.png) 1.5)  Go to *Preferences* -> *Advanced* and fill in your information with the same email you used for your github account and then click *Install Command Line Tools*
  <img src="imgs/github_cmd.png" style="width:600px;">

* no other tools will be necessary but for the future here's a recommended [list of DALI recommended dev tools](https://docs.google.com/document/d/1XODTyblh3NP1sxO-mObPfx5STlbD78tK0r2lmj4E8Co).

##2)  Terminal

We'll have to use some Terminal command line dark magic here.  Copy/paste is your friend.  

  <br>![](imgs/square.png) 2.0)  Open Terminal (on Windows open Git Shell)
  <br>![](imgs/square.png) 2.1)  ```cd ~/Desktop```
  <br>![](imgs/square.png) 2.2)  ```git clone https://github.com/dali-lab/project-name.git my-dali-project```
  <br>![](imgs/square.png) 2.3)  ```cd my-dali-project```

what this does is change directory to your Desktop, then clones the the tutorial repository there, and then you cd into that cloned repository.  For the rest of this tutorial we assume that you have a Terminal window open and that you are cd'd into the repository you just cloned.  If you get any errors in the above give a shout! 

Some more Terminal commands that are useful:

```ls -la```  will list files in current directory </br>
```pwd```  will show current directory</br>
```cd  somenewdirectory```  will change directory to *somenewdirectory*</br>
```cp source target``` will copy files</br>
```mv source target``` will move</br>


You are now ready to start!


##3) Editing Markdown

  <br>![](imgs/square.png) 3.0)  In Terminal run:  ```atom .``` For Windows, just open up atom and use 'Add Project Folder' and select the cloned directory from above.  

This will open the current folder into the Atom text editor. Note the folder structure.  What are you reading now (in browser) is actually a [markdown](https://guides.github.com/features/mastering-markdown/) file: **README.md**. 

Play around and make some changes.  In particular add yourself to the team section!  Change some images.  We'll walk through this step but in particular see if you can find *(command+f)* teammates and see how to change the text and image.  To insert a new image just put a .jpg or .png in the img folder (make sure it is square) and change the ```img src=``` line. 



##4) Git


Now that you've made some changes to the site, we'll go over how to use git to commit and push your changes.   Git is a code version control system and allows you to have a named log of your changes to the code and a way to work on the same files together with other people. It is sort of like an offline google docs where you *commit* every set of changes. [Here's a good resource](http://rogerdudler.github.io/git-guide/) but we'll do the basics here.  

<img src="imgs/git_workflow.png" style="width:600px;">

###Clone the repo:
You have already done this step using the ```git clone``` command.

###Check status
Use ```git status``` to see what git thinks you have been working on. If you see *untracked* that means git doesn't know that you want to commit those file.  Use ```git add filename``` on those files to tell git to track them. 

###Commit your changes:
In Terminal:  ```git commit -am "i made some changes"```

``-a`` means all changes<br>
``-m`` indicates that your commit message follows directly, a commit message is required.


###Pull your teammates changes:
In Terminal:  ```git pull```

This will check the github remote server for any changes and download and merge them into your local repo. 

###Merge Conflicts

At this point after a ```git pull``` you may get a message that looks like this:

     CONFLICT (content): Merge conflict in somefile
     Automatic merge failed; fix conflicts and then commit the result.

This is when the fun starts.  How do you fix this?

The cause for merge conflicts is when you edited the exact same line as someone else and git doesn't know how to automatically merge that. So to fix you just need to pick apart the conflict and merge it in.

If you were to do this by hand, git takes the pretty code you wrote and injects terrible "conflict markers" that look like this:

    <<<<<<< HEAD
    var h = 'hello, world';
    =======
    var h = 'Hi!';
    >>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d
      
where the line between  ```<<<HEAD``` and ```====``` is the line/lines of code that are relevant in your file, and between  ```====``` and ```>>>> cb1abc6``` are from the remote repository.  The crazy characters refer to the commit that the change comes from. 

Since we've been using Atom so far there is a nice plugin to help visualize this a little better.

  <br>![](imgs/square.png) Atom -> Preferences -> Install -> search for merge-conflicts
  <img src="imgs/merge-conflicts.gif" style="width:600px;">


Once you have your conflict file the way you want it.  Fixed and without any more of the conflict markers.

All you have to do to continue is:  ```git add thefixedfile``` which indicated to git that you have resolved the conflict. Then ```git commit``` with no options will complete the merge and automatically create a commit message.


###Push Your Commits

Now that you've resolved any conflicts you're ready to push to the remote repository!

  <br>![](imgs/square.png) ```git push origin master```

  ```origin``` is the remote you are pushing to and is named origin by default

 ```master``` is the branch you are pushing.

###Done!

Now you can go to [http://dali-lab.github.io/project-name](http://dali-lab.github.io/project-name) to see your site!

##5) Advanced Git for Devs

Setting up SSH keys

[Read this guide here](https://help.github.com/articles/generating-an-ssh-key/)

Setting up Git Config

```
atom ~/.gitconfig  # or whatever texteditor you prefer

git config --global user.name "Your Name"
git config --global user.email <yourgithubemail>
git config --global push.default simple   # this is much safer than 'matching'

# Then add the aslias and branch configs

# Sample
[user]
    name = John Doe
    email = johndoe@dali.dartmouth.edu
[alias]
        pullorigin="pull --rebase origin"   # tweak naming to whatever, but a nice shortcut to ensure --rebase
[branch]
        autosetuprebase = always    # set rebase to be default for new branches
[push]
    default = simple
```

Setting up `git push` to use `simple` matching is very important. Otherwise it is easy, while you're force-pushing a feature branch, to also accidentally force push your master to the prod repo. See here for a good explanation http://stackoverflow.com/a/13148313.

## Recommended Workflow

```
git clone git@github.com:dali-lab/gitivity.git
```
This will set up origin to point to the dali-lab/gitivity repo. 

### Work on Code
- Start a local feature branch and do work on it 
```
git checkout -b <feature>
git add <file>
git commit -m 'commit message'
```

- Periodically pull in changes from origin/master and update your feature branch.
Note that these commands only updates your current branch

```bash
git pull --rebase origin master
```
or
```bash
git pullorigin master
```

- When you're nearly ready to publish, rebase your local branch on top of the latest master. 
```
git checkout <feature>  # make sure you're on your branch
git pull --rebase origin master   # rebase on top of the remote master
```

 If you have rebase conflicts, fix the files manually and do `git add`, then `git rebase --continue`. Repeat until you're all good.

### (Optional) Clean up branch history 
You might want to consider cleaning up your local branch history. It's a good idea to commit frequently as checkpoints to save your work, but if you have a lot of them, the shared repo history will look cleaner without them.

Rebase with up git "interactive" mode, which will pull up your text editor. To squash a commit into the previous one, replace the "p" with an "s", and save the file. 
```
git rebase -i master
```

OR
```
git rebase -i HEAD~X
```
where X is the number of commits back you want to roll back

Note that this can cause problems if you've pushed your branch to your remote repo, since you are rewriting commit history in your local branch and this will mismatch with the remote repo's history. If you've done a rebase commit squash, the next time you push to the remote repo you will have to do a forced update `git push -f origin feature`. However be aware that this is dangerous and anyone else working on this feature branch will have issues pushing their branch. One solution to this is asking them to `stash` their commits and then `rebase` after you push your branch.

After you are finished working on your branch

```
git push origin feature
```

Then go to Github and submit a pull request (choosing whatever branch you just pushed), add a quick description. Possibly do code review. Close the request.

To do a code review, @mention a peer in the pull request. Once approved, your code changes will be merged.

**You should also delete the branch in Github.**

##6) Additional Git Things

### Useful Commands

##### Push local branch to your remote repo

```
git push -u origin newfeature    
```
-u is short for --set-upstream, which will set up your local branch to pull automatically from this newly pushed branch. However it's optional.

##### Delete remote branch
```
git push origin --delete <feature>
```

##### Delete local branch
```
git branch -D <feature>
```

##### Checkout a remote branch
```bash
git checkout feature     # shorter version, works with newer versions of Git
```

##### Reset your branch to some other branch

Be careful about this!! You will lose your local changes.
```bash
git reset --hard mybranch goodbranch
git reset --hard master origin/master   
```

##### Grab a commit from another branch
Sometimes you commit to the wrong branch. Figure out the commit ID of the commit you want to grab.
```
git cherry-pick <COMMIT ID>
```

### Basic guidelines
- Try to use "git rebase" commands when possible rather than "git merge", so we can have a cleaner and more linear Git commit history (that said, merge commits do have their place).
- Use local branches to do most of your more involved work (this also lets you quickly switch between different features, or pause work on a feature to work on a bug fix).
- The general idea is to try to resolve conflicts locally (by pulling in changes from the shared repo before pushing), so merging into master (either manually or by Github pull request merge should be simple and automatic)

### Pro-tips
- If you are doing a complex rebase merge fix, if you squash your commits first (see earlier notes about rebase interactive), you can do your manual merge fixes in fewer, as there are fewer commits to have to edit. Otherwise you may be opening your text editor a lot.
- A nice way to visualize your Git branches locally is by using GitX (http://rowanj.github.io/gitx/).
-Add the following to your .bash_profile to see your current branch and status within the command line prompt:

```
# Prompt to add branch and status to the command line
COLOR_RED="\[\e[31;40m\]"
COLOR_GREEN="\[\e[32;40m\]"
COLOR_CYAN="\[\e[36;40m\]"
COLOR_RESET="\[\e[0m\]"

function git_branch_name {
  ref=$(git symbolic-ref HEAD 2> /dev/null) || return
  echo " ("${ref#refs/heads/}")"
}

function git_branch_color {
  if [[ $(git status 2> /dev/null | grep -c :) == 0 ]]
    then echo "${COLOR_GREEN}"
    else echo "${COLOR_RED}"
  fi
}

function prompt_title {
  PS1="\w$(git_branch_color)$(git_branch_name)${COLOR_RESET} \$ "
}

PROMPT_COMMAND=prompt_title
```

Add the following to your .bash_profile for Git Autocompletion. This way you can `git checkout TAB` for branches

```
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
```
More information can be found [here](http://apple.stackexchange.com/questions/55875/git-auto-complete-for-branches-at-the-command-line)


