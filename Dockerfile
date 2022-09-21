FROM node:16-alpine AS builder

# Install deps
ARG NPM_AUTH=$NPM_AUTH
ARG NPM_EMAIL=$NPM_EMAIL
ARG APP_ENV=$APP_ENV

WORKDIR /ofac-ti-ui
COPY package.json yarn.lock .npmrc ./

RUN echo ${NPM_AUTH}
RUN echo ${NPM_EMAIL}

RUN yarn install --frozen-lockfile

# Build
COPY . .
RUN yarn build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs /ofac-ti-ui
USER nextjs

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD [ "yarn", "start" ]