Показать все хосты в инвентаре:

`ansible-inventory -i inventory.yml --list`

Графическое представление групп:

`ansible-inventory -i inventory.yml --graph`

## Паттерны селекторов хостов

Когда мы запускаем playbook, можно использовать хосты очень гибко:

```
# Одна группа
ansible-playbook -i inventory.yml site.yml --limit webservers

# Несколько групп (ИЛИ)
ansible-playbook site.yml --limit "webservers,dbservers"

# Пересечение групп (И)
ansible-playbook site.yml --limit "webservers:&production"

# Исключение (НЕ)
ansible-playbook site.yml --limit "production:!dbservers"

# Комбинированные паттерны
ansible-playbook site.yml --limit "webservers:&production:!web1"

# Диапазоны внутри группы
ansible-playbook site.yml --limit "webservers[0:5]"

# По регулярным выражениям
ansible-playbook site.yml --limit "~web[0-9]+"
```
