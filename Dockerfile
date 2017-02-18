FROM node:latest

WORKDIR /block

ADD https://raw.githubusercontent.com/assembleapp/scaffolds/master/.clients/assemble.js /block/

ADD . /block/
