#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive

HUGO_URL=https://github.com/gohugoio/hugo/releases/download
HUGO_VERSION=0.55.6
HUGO_PLATFORM=Linux-64bit

# Install curl, git
apt-get update -qyy
apt-get install -y curl git

# Install Git LFS
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash
apt-get install -y git-lfs

# Install Hugo
curl -sL ${HUGO_URL}/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_${HUGO_PLATFORM}.tar.gz | tar -xzf - -C /usr/bin
