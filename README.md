# Papeda

> Never let judgment cloud your curiosity. ~ Papeda

Papeda

## Prerequisites

* [git](https://docs.docker.com/install/)
* [docker](https://docs.docker.com/install/)

## Usage

### Docker (recommended)

* `$ git clone git@bitbucket.org:shipper/driver-management.git && cd driver-management`
* `$ docker-compose -f docker-compose.dev.yaml up -d`

### Locally

    git clone git@bitbucket.org:shipper/driver-management.git
    cd driver-management
    yarn install

running in development

    yarn dev

running in production

    mv .env.example .env && export $(cat .env | xargs)
    yarn run build
    yarn start

## Project structure

Root

    ...
    ├── components
    ├── pages
    ├── redux
    ├── static
    ├── server.js
    ├── env.example.sh
    ├── package.json
    └── yarn.lock

Components

    ...
    ├── components
    │   └── Info
    │       └── index.js
    ...

Pages

    ...
    ├── pages
    │   ├── about
    │   │   ├── component
    │   │   │   └── index.js
    │   │   ├── container
    │   │   │   └── index.js
    │   │   └── index.js
    ...
    │   ├── index.js
        ├── _app.js
        └── _document.js

Redux

    ├── redux
    │   ├── ducks
    │   │   ├── Character
    │   │   │   ├── actions.js
    │   │   │   ├── epics.js
    │   │   │   ├── index.js
    │   │   │   └── types.js
    ...
    │   ├── index.js
    │   └── root
    │       ├── epics.js
    │       └── reducers.js


# License
This project is licensed under the MIT license, Copyright (c) 2018 Papeda. For more information see LICENSE.md.

# Contributing
[TODO]

# Versioning
**Next Dashboard** is using [semantic versioning](https://semver.org/). For the versions available, see the [tags on this repository](https://bitbucket.org/shipper/driver-management/src/master).

