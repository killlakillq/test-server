FROM node:latest
RUN npm install -g pnpm
RUN mkdir -p /var/www/api
WORKDIR /var/www/api
ADD . /var/www/api
RUN pnpm install
CMD pnpm build && pnpm start:prod