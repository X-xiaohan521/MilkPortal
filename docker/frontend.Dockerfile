FROM ubuntu:latest
LABEL authors="dujin"

ENTRYPOINT ["top", "-b"]