#/bin/bash

set -exuo pipefail

rm -rf layer-out
docker build -t typeorm-pg-layer-nodejs .
CONTAINER=$(docker run -d typeorm-pg-layer-nodejs false)
docker cp $CONTAINER:/var/task/layer layer-out
docker rm $CONTAINER
