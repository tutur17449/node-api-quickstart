FROM node:12.20-alpine
WORKDIR /srv/app
COPY package.json* /srv/app
RUN npm i
RUN npm i -g nodemon
COPY . /srv/app
RUN chmod +x docker-run.sh
CMD ["sh", "docker-run.sh"] 