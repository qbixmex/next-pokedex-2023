# NextJs

## Run development

```bash
#npm
npm run dev

# yarn
yarn dev
```

## Build application

```bash
# npm
npm run build

# yarn
yarn build
```

## Start application

**IMPORTANT: You must run build before run this script**

```bash
# npm
npm run start

# yarn
yarn start
```

## Run Lint

```bash
# npm
npm run lint

# yarn
yarn lint
```

## Create Docker Image

```bash
docker build -t nextjs-initial .
```

## Run Docker Image

```bash
docker run --name=next-app -p 3000:3000 nextjs-initial
# or use local port "80"
docker run --name=next-app -p 80:3000 nextjs-initial
```