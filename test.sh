docker-compose up -d
sleep 5
if curl -s localhost | grep -q '<title>Usuarios</title>'; then
  echo "PASSED"
  export TESTFLAG="PASSED"
  exit 0
else
  echo "FAILED"
  export TESTFLAG="FAILED"
  exit 1
fi
docker-compose down