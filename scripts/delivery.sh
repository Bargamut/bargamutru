#!/bin/bash

CONTAINER_OPTIONS='-d -p 3000:80' # $1
CONTAINER_NAME='bargamut-site' # $2
IMAGE_NAME='bargamut/bargamut-site:latest' # $3

if [ ! "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
	docker stop $CONTAINER_NAME

	if [ "$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)" ]; then
			# cleanup
			docker rm $CONTAINER_NAME
	fi

	# run your container
	docker run $CONTAINER_OPTIONS --name $CONTAINER_NAME $IMAGE_NAME
fi