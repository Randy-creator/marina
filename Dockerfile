FROM node:20-slim

WORKDIR /app/api

COPY api/package*.json ./
RUN npm install --omit=dev

COPY api/server.js ./
COPY marina ./marina

RUN chmod +x ./marina

EXPOSE 5000

CMD ["npm", "start", "--prefix", "."]
