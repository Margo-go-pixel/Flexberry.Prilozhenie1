docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_1/app ../..
