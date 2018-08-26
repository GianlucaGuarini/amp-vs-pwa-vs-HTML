#!/bin/bash

mkdir pics

for pic in {1..33}; do
  curl https://picsum.photos/600/600?image=$pic > pics/$pic.jpeg;
done