#!/bin/sh
set -e
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

yarn link $(cat dev-links)

mkdir -p dist/roodit-dashboard/server && touch dist/roodit-dashboard/server/main.js

echo 'watching server'
npx nodemon --watch dist -r source-map-support/register dist/roodit-dashboard/server/main.js &

echo 'compiling angular app'
npx ng run roodit-dashboard:build --aot --watch --no-delete-output-path &
npx ng run roodit-dashboard:server --watch --no-delete-output-path &

wait