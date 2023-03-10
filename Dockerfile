FROM denoland/deno

EXPOSE 8080

WORKDIR /app
USER deno

COPY . .

RUN deno cache app.ts
RUN mkdir -p /var/tmp/log
CMD ["run", "--allow-net", "app.ts"]
