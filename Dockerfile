FROM lambci/lambda:build-nodejs12.x

COPY layer ./layer
RUN cd layer && npm ci --production
