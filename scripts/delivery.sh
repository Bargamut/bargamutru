#!/bin/bash

docker stop bargamut-site-contaner || true &&
docker rm bargamut-site-contaner || true &&
docker run --name bargamut-site -p 3000:80 -d bargamut-site-contaner:latest