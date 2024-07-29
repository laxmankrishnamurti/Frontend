# Git / Github

## Introduction

- <code>Git</code> :: Software
- <code>Github</code> :: Web-base Service that host online of the software.

Create an account on Github and config Git.

- Git Configuration

```javascript
git config --global user.email "Github-Email-Id"
git config --global user.username "Github-Username"
```

- Check Git-config list

```javascript
git config --list
```

- Check Git Version

```javascript
git --version
```

- Check Git Repo Status

```javascript
git status
```

- Initialize a git-repo

```javascript
git init
```

- WorkFlow (Broader Perspective)
  - Working Directory -> git add -> Staging area -> git commit -> repo -> push -> Github

```javascript
git add . or filename
git commit -m "commit-message"

//commit message format -> Present Tense, Imperative (just for convinience)
```

- Check all Logs

```javascript
git log

//add flags

git log --oneline
```

- Ignore files to push on Github or prevent to add in Git-Repo

```javascript
Create a hiddedn file named ".gitignore" and write down the file name which we want to ignore.
```

- Git does not track empty repo. But we want to track or upload it we should create a new hidden file named .gitkeep into it.

## Under the hood

- Object :: In .git repo there is a directory named object. In which we can see our commit status. Like - SHA value of commit. And with the help of this SHA value we can track or we can jump into that commit and we can see exact code as was on that time.

- Git Snapshot :: Snapshot is not an image, it's just a representation of code at a specific point. Git stores information in key-value based database. Everything is stored as an object and each object has it's own unique hash code.

#### 3 - Pillers/Musketeers of git

    - Commit Object -> Commit object includes Tree object, Parent Commit Object, Author, Commiter, Commit Message
    - Tree Object -> Tree object includes File Mode, File Name, File Hash, Parent tree object
    - Blob Object -> The code that git has to store in a snapshot way in their database.

Commit Object has a reference of Tree object
Tree Object has a reference of Blob object
Blob is the actual code base.

Hence, we can jump one over one and get that blob or any type of commit or tree information.

- Show Commit information

```javascript
git show -s --pretty=raw commit_id
```

- Show Tree Information

```javascript
git ls-tree tree_id
```

- Show Blob Information

```javascript
git show blob_id
```

- Read the content of the blob

```javascript
git cat-file -p commit_id
```

## Branches

In Git Enviroment there is a Parent Branch in which we push our final production code. But there is also a term which is widely used in git world is "Branches". We can create multiple branches along with Parent branch to work on extra features for our application. Branches provides an Isolation (just for understanding purpose) to work on a specific feature for our application and once it has done we can merge it with the Parent Branch.

There can me multiple branches of a Parent branch and it will not affect to other brances until we do not merge a branch code into a single branch.

- HEAD :: It indicates the current branch.

- Check current brach

```javascript
git branch
```

- Create a new branch

```javascript
git branch branch_name
```

- Change branch Position

```javascript
git switch branch_name
git checkout branch_name
```

- Create a new branch and switch directly

```javascript
git switch -c branch_name
```

- Merge sub-branch with Main branch

  Fast-forward Merge

```javascript
git checkout master/main
git merge branch_name
```

- <code>Merge Conflict</code> :: This happens becasue of overriding the same file which is available in both Parent and Branch file and Parent branch is trying to merge that file from that praticular Branch. There is not any short-cut or any command to solve it automatically we have to solve it manually.

Abort the Merge while conflict

```javascript
git merge --abort
```

Merge manually, add merge and then commit

- Rename Branch

```javascript
git branch -m old_branch_name new_branch_name
```

- Delete a Branch

```javascript
git branch -d branch_name
```

- List all Branches

```javascript
git branch
```

# Git diff & stash

- <code>git diff</code> : This is an informative command that shows the difference between two commits

```javascript
git diff --staged
```

- Comparison between brances

```javascript
git diff branch_one branch_two
```

- Comparison between two commits

```javascript
git diff commit_hash_one commit_hash_two
                    OR
git diff commit_hash_one..commit_hash_two
```

- <code>Git Stash</code> :: Stash is a way to save changes in a temporary location. It is useful when we want to make changes to a file but don't want to commit them yet.
