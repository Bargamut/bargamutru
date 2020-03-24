#!/bin/bash

docker stop bargamut-site-contaner
docker rm bargamut-site-contaner
docker run --name bargamut-site -p 3000:80 -d bargamut-site-contaner:latest