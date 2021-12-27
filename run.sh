#!/bin/bash

set -e

export ARCANIST_AUTOMATOR_TOOLS_PREFIX="node_modules/arc-automator/tools"

COMMAND_ARG=$1

if [ -z "$COMMAND_ARG" ]; then
  echo "Error, command expected"
  $ARCANIST_AUTOMATOR_TOOLS_PREFIX/help/help.sh
  exit 1
fi

AVAILABLE_COMMANDS=`ls -1 $ARCANIST_AUTOMATOR_TOOLS_PREFIX`
COMMAND=""
for CMD in $AVAILABLE_COMMANDS; do
  if [ "$CMD" == "$COMMAND_ARG" ]; then
    COMMAND=$COMMAND_ARG
    break
  fi
done

if [ "$COMMAND" == "" ]; then
  echo "no such command: $COMMAND_ARG"
  $ARCANIST_AUTOMATOR_TOOLS_PREFIX/help/help.sh
  exit 1;
fi

$ARCANIST_AUTOMATOR_TOOLS_PREFIX/$COMMAND/$COMMAND.sh
