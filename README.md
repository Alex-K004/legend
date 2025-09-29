# Health Indicator 🎮

JavaScript библиотека для определения статуса здоровья игровых персонажей с полным покрытием тестами и CI/CD.

## Бейджики статуса

![Node.js CI](https://github.com/Alex-K004/legend/actions/workflows/test.yml/badge.svg)
![Tests](https://img.shields.io/badge/tests-100%25 passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## Описание

Функция определяет цветовую индикацию здоровья персонажа:

- **Здоровье > 50** - 🟢 healthy (зелёный)
- **Здоровье от 15 до 50** - 🟡 wounded (жёлтый)  
- **Здоровье < 15** - 🔴 critical (красный)

## Установка

```bash
npm install health-indicator