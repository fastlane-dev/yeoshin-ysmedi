FROM node:16.13.2-alpine

WORKDIR /usr/src/app
COPY . .

ENV PORT 3100

EXPOSE ${PORT}

CMD ["sh", "-c", "yarn start -p ${PORT}"]