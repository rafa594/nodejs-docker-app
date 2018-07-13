docker-compose up -d
echo "Este es el testflag :"
echo $TESTFLAG
echo  "---------------"
sleep 10
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