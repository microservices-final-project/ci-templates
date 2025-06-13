import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,           // usuarios virtuales
  duration: '10s',   // duración total del test
};

export default function () {
  const res = http.get('http://52.249.246.58:8080/actuator/health'); // Cambia al endpoint de tu API Gateway

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
