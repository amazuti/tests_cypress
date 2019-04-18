#base image
FROM cypress/browsers:chrome69

RUN mkdir /cypress

VOLUME /cypress
WORKDIR /cypress

COPY . /cypress

RUN npm install --save-dev cypress
RUN $(npm bin)/cypress run
