---
title: Установка Node.js с помощью Ansible
description: Как установкить Node.js с помощью Ansible
layout: article-layout
time: 14 июля 2024
caption: ansible
---

# Установка Node.js:

> {{caption }}

<time>{{time}}</time>

---

### Установка

```yaml
---
- name: Установка Node.js на сервер
  hosts: servers
  become: yes
  vars:
    nodejs_version: 22

  tasks:
    - name: Скачивание пакета Node.js
      get_url:
        url: "https://deb.nodesource.com/setup_{ { nodejs_version }}.x"
        dest: ~/nodejs
        mode: 0755

    - name: Запуск скрипта установки пакета Node.js
      command: ~/nodejs
      args:
        creates: /etc/apt/sources.list.d/nodesource.list

    - name: Установка Node.js
      apt:
        name:
          - nodejs
        update_cache: true
```

### Проверка установленой версии Node.js

```yaml
---
- name: Проверка версии Node.js
  hosts: all
  tasks:
    - name: Получение текущей версии Node.js
      command: node --version
      register: node_version
      changed_when: false

    - name: Отображение текущей версии Node.js
      debug:
        msg: "Node.js version is { { node_version.stdout }}."
```
