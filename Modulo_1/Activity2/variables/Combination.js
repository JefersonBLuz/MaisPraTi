"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = exports.CustomersProducts = exports.Orders = exports.Sales = void 0;
var ForEach_1 = require("./ForEach");
var Sales = [
    __assign(__assign({}, ForEach_1.Products[0]), { amount: 5 }),
    __assign(__assign({}, ForEach_1.Products[1]), { amount: 10 }),
    __assign(__assign({}, ForEach_1.Products[2]), { amount: 7 }),
    __assign(__assign({}, ForEach_1.Products[3]), { amount: 8 }),
    __assign(__assign({}, ForEach_1.Products[4]), { amount: 9 }),
    __assign(__assign({}, ForEach_1.Products[5]), { amount: 3 })
];
exports.Sales = Sales;
var Orders = [
    { customer: 'João', product: 'DVD', amount: 2 },
    { customer: 'João', product: 'CD', amount: 10 },
    { customer: 'João', product: 'Blu-ray', amount: 5 },
    { customer: 'Maria', product: 'DVD', amount: 4 },
    { customer: 'Maria', product: 'CD', amount: 7 }
];
exports.Orders = Orders;
var CustomersProducts = {};
exports.CustomersProducts = CustomersProducts;
var Stock = [
    __assign(__assign({}, Sales[0]), { minimum: 2 }),
    __assign(__assign({}, Sales[1]), { minimum: 4 }),
    __assign(__assign({}, Sales[2]), { minimum: 20 }),
    __assign(__assign({}, Sales[3]), { minimum: 10 }),
    __assign(__assign({}, Sales[4]), { minimum: 5 }),
    __assign(__assign({}, Sales[5]), { minimum: 15 })
];
exports.Stock = Stock;

