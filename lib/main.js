import { Point } from './Point.js';
import { ColorPoint } from './ColorPoint.js';

const firstPoint = new Point(2, 10)
console.log('Первая точка: ' + firstPoint)

let colorPoint = new ColorPoint(2, 10, 'green')
console.log('Вторая точка: ' + colorPoint)

colorPoint = ColorPoint.default()
console.log('Цветная точка по умолчанию: ' + colorPoint)
