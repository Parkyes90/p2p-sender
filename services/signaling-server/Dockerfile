FROM python:3.10-slim as builder

# dependencies
RUN apt-get -qq update > /dev/null && \
    apt-get -qq -y install gcc

WORKDIR /server

ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip && pip install pipenv

COPY Pipfile* ./

RUN pipenv install --system --ignore-pipfile

COPY . ./

EXPOSE 8000

FROM builder as production

FROM builder as development
ENV STAGE dev
RUN pipenv install --system --dev --ignore-pipfile
