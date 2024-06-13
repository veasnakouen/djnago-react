FROM python:3.12-alpine
MAINTAINER MT IT Dev Teams

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.text
RUN pip install -r /requirements.text

RUN mkdir /app
WORKDIR /app
COPY ./app /app


RUN adduser -D user
USER user