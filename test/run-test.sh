#!/usr/bin/env bash
set -ueo pipefail
cd test && docker-compose up --exit-code-from poplite-test
