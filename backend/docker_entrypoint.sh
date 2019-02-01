#!/bin/sh
set -e

rm -f /app/tmp/pids/server.pid

bundle exec rake db:migrate 2>/dev/null || bundle exec rake db:create

exec bundle exec "$@"
