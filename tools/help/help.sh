#!/bin/bash

set -e

echo "arcanist automator help"
echo "- to run a specific command, do:"
echo "    npx arc-automator [command]"
echo "- available commands:"
ls -1 $ARCANIST_AUTOMATOR_TOOLS_PREFIX
