#!/bin/bash

set -e

echo "enter the target branch name:"
read TARGET_BRANCH

echo "enter space-separated list of diffs in the stack [format: DXXXX]"
read DIFFS

for DIFF in $DIFFS; do
  echo "applying diff: $DIFF"
  arc patch $DIFF
  CURRENT_COMMIT_HASH=$(git rev-parse HEAD)
  echo "current commit hash: [$CURRENT_COMMIT_HASH]"
  git checkout $TARGET_BRANCH
  git cherry-pick $CURRENT_COMMIT_HASH
  git branch -D arcpatch-$DIFF
done