FROM node:alpine
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR '/fibcalc'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
EXPOSE 3000
COPY --from=0 /fibcalc/build /usr/share/nginx/html

