sleep 10
if curl -s localhost | grep -q '<title>Usuarios</title>'; then
  echo "PASSED"

  exit 0
else
  echo "FAILED"

  exit 1
fi
