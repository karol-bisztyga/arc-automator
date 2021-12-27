# Patch diff stack

## Purpose

This automatically applies a stack of diffs to the provided branch without a need to injecting them one by one manually.

## Usage

- create a branch on which you want your diffs to be applied
- run `npx arc-automator patch-diff-stack`
- provide the branch name
- provide the diffs IDs separated by space, like: `D0001 D0002 ... DXXXX`
