FROM node:14.2-alpine3.11
RUN mkdir -p /usr/src/wtat1-exam
RUN set -ex \
  && apk add --no-cache  bash
WORKDIR /usr/src/wtat1-exam
COPY . .
RUN yarn install --production=true
ENV REACT_APP_ENDPOINT=http://localhost:3011
RUN yarn run build
EXPOSE 3004
CMD ["node", "express-backend/server.js"]
