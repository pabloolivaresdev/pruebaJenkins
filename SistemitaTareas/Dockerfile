FROM node:20 AS build
WORKDIR /SistemitaTareas
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /SistemitaTareas/dist/sistemita-tareas/browser /usr/share/nginx/html
EXPOSE 80
