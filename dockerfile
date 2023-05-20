FROM python:alpine3.18

# install
RUN apk add --no-cache

RUN mkdir /app
RUN pip install --upgrade pip

WORKDIR /app


ENV PYTHONUNBUFFERED=1


EXPOSE 5003


COPY start.sh /start.sh

RUN chmod +x /start.sh


CMD ["/start.sh"]

