#! /usr/bin/env bash

set -e

pushd working-area
rm -rf .git node_modules package.json
popd

git checkout -- working-area