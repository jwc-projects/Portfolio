FROM node:22.9.9
WORKDIR /portfolio-app
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "dist"]