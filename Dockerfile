FROM node:18.1.0-slim
COPY . .
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine-slim
COPY --from=0 /dist /usr/share/nginx/html/dist
COPY --from=0 /slides /usr/share/nginx/html/slides
COPY --from=0 /plugin /usr/share/nginx/html/plugin
COPY --from=0 /img /usr/share/nginx/html/img
COPY --from=0 /index.html /usr/share/nginx/html/index.html