FROM node:4.7.3-alpine
ADD app app
WORKDIR /app/
RUN npm install
CMD ["node","/app/app.js"]
EXPOSE 8080
EXPOSE 8443
