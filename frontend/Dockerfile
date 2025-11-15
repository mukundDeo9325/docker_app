FROM node:18

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npm install -g serve
RUN npm run build || true

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
