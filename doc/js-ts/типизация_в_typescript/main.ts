/**
 * Типизация объекта с помощью Record. В качестве первого дженерика передаётся
 * тип ключа (string), а в качестве второго тип значения (number).
 * Если объект произвольный, то в качестве типа значения может использоваться unknown
 */
const roles: Record<string, number> = {
  admin: 1,
  user: 2,
};

function getRole(name: string) {
  return roles[name];
}
