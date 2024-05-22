#!/bin/sh

git_user_id=blubbel01
git_repo_id=vio-api-ts
release_note="update"
git_host=$4

# Initialize the local directory as a Git repository
git init

# Adds the files in the local repository and stages them for commit.
git add .

# Commits the tracked changes and prepares them to be pushed to a remote repository.
git commit -m "$release_note"

# Sets the new remote
git_remote=$(git remote)
if [ "$git_remote" = "" ]; then # git remote not defined
    git remote add origin git@github.com:${git_user_id}/${git_repo_id}.git
fi

git pull origin master

# Pushes (Forces) the changes in the local repository up to the remote repository
echo "Git pushing to git@github.com:${git_user_id}/${git_repo_id}.git"
git push origin master
