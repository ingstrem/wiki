---
title: Удаление мусора
layout: article-layout
time: 14 июля 2024
---

# Удаление мусора:

<time>{{time}}</time>

---

- name: Installing Nodejs
  get*url:
  url: "https://deb.nodesource.com/setup*{{ nodejs_version }}.x"
  dest: ~/nodejs
  mode: 0755

- name: Nodejs Package
  command: ~/nodejs
  args:
  creates: /etc/apt/sources.list.d/nodesource.list

- name: Yarn GPG
  apt_key:
  url: https://dl.yarnpkg.com/debian/pubkey.gpg
  state: present

- name: Importing Yarn Package
  copy:
  content: "deb https://dl.yarnpkg.com/debian/ stable main"
  dest: /etc/apt/sources.list.d/yarn.list

- name: Installing Nodejs + Yarn
  apt:
  name: - nodejs - yarn
  update_cache: true
