#! /usr/bin/env bash

set -e

pushd working-area
git init .
git add .
git commit -m "Initial commit."

rm -rf ../stage1/node_modules
cp ../stage1/* .

git add .
git commit -m "Adding files for pre-pushed version."

heroku git:remote -a yow-connected-2015
git push heroku master --force

npm install
popd

git checkout -- ./working-area/index.html
rm ./working-area/package.json

pushd working-area
git add .
git commit -m "Prepared for presentation."
popd

pushd stage1
npm install
popd

pushd stage2
npm install
popd

pushd stage3
npm install
popd

echo "All done."
