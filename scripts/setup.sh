#!/usr/bin/env bash

yarn prisma migrate save --name "Basic User Init" --experimental
yarn prisma migrate up --experimental
prisma introspect
prisma generate