#!/usr/bin/env bash

yarn prisma migrate save --name "Basic User Init" --experimental
yarn prisma migrate up --experimental
yarn prisma introspect
yarn generate
