# --- Stage 1: ????? (Java 11) ---
FROM eclipse-temurin:11-jdk as builder

# sbt?????????? (????????????)
WORKDIR /usr/local/bin
# ???(????)??sbt-launch.jar????
COPY sbt-launch.jar .
# sbt???????????
RUN echo 'SBT_OPTS="-Xms512M -Xmx1536M -Xss1M"' > /usr/local/bin/sbt && \
    echo 'java $SBT_OPTS -jar `dirname $0`/sbt-launch.jar "$@"' >> /usr/local/bin/sbt && \
    chmod 0755 /usr/local/bin/sbt

# --- ????????? ---
WORKDIR /app
COPY ./project ./project
COPY ./build.sbt .
RUN sbt update
COPY . .
RUN sbt stage

# --- Stage 2: ???? (Java 11) ---
FROM eclipse-temurin:11-jre
WORKDIR /app
COPY --from=builder /app/target/universal/stage .
CMD ["./bin/backend", "-Dplay.http.secret.key=your-super-secret-key-that-is-long-and-random"]
