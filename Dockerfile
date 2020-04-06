FROM node:current-slim

COPY ./package.json /home/app/package.json
COPY ./yarn.lock /home/app/yarn.lock
COPY ./.npmrc /home/app
WORKDIR /home/app/
RUN yarn
COPY ./ /home/app/
EXPOSE 6000
CMD ["yarn", "start"]