#!/usr/bin/bash
. "$(dirname -- "$0")/_/husky.sh"

git diff HEAD --quiet
