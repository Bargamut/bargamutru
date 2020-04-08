#!/bin/bash

# Node Version Manager with Jenkins
set +ex                     	# immediate script fail off, echo off
export NVM_DIR="$HOME/.nvm" 	# set local path to NVM
. ~/.nvm/nvm.sh             	# add NVM into the Shell session
#nvm install CI_NODE_VERSION 	# first time only
nvm use CI_NODE_VERSION     	# choose current version
set -ex                     	# immediate script fail on (default), echo on (default)