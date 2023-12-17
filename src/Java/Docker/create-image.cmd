docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya_gladkov_a-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya_gladkov_a-java/app ../../..
