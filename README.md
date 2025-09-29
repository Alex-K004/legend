# Health Indicator 🎮

JavaScript библиотека для определения статуса здоровья игровых персонажей с полным покрытием тестами и CI/CD.

## Бейджики статуса

![Node.js CI](https://github.com/ВАШ_USERNAME/health-indicator/actions/workflows/test.yml/badge.svg)
![Coverage Status](https://coveralls.io/repos/github/ВАШ_USERNAME/health-indicator/badge.svg?branch=main)
![npm version](https://img.shields.io/npm/v/health-indicator)
![License](https://img.shields.io/github/license/ВАШ_USERNAME/health-indicator)

## Описание

Функция определяет цветовую индикацию здоровья персонажа:

- **Здоровье > 50** - 🟢 healthy (зелёный)
- **Здоровье от 15 до 50** - 🟡 wounded (жёлтый)  
- **Здоровье < 15** - 🔴 critical (красный)

## Установка

```bash
npm install health-indicator