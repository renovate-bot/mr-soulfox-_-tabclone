#!/usr/bin/bash
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- comitlint --edit "$1"
