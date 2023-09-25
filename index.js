"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const api_url = 'https://vsbrothers.com';
const apiService = {
    calculatorGetUsPorts: `${api_url}/calculator-get-us-ports`,
    calculatorGetAucLocations: `${api_url}/calculator-get-auclocations`,
    calculatorGetIntCities: `${api_url}/calculator-get-intlcities`,
    calculatorRecalculate: `${api_url}/calculator-recalculate`
};
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/calculator-get-us-ports', (req, res) => {
    (0, axios_1.default)({
        url: apiService.calculatorGetUsPorts,
        data: {
            location_id: req.query.location_id
        }
    }).then(response => {
        res.send(response.data);
    }).catch(e => {
        console.log(e);
    });
});
app.get('/calculator-get-auclocations', (req, res) => {
    (0, axios_1.default)({
        url: apiService.calculatorGetAucLocations,
        data: {
            auc_id: req.query.auc_id
        }
    }).then(response => {
        res.send(response.data);
    }).catch(e => {
        console.log(e);
    });
});
// calculator-recalculate
app.get('/calculator-recalculate', (req, res) => {
    (0, axios_1.default)({
        url: apiService.calculatorRecalculate,
        data: {
            'auc_location_id': req.query.aucLocationId,
            'us_port_id': req.query.portUSId,
            'intl_city_id': req.query.intlCityId,
            'cargo_type': req.query.cargoType,
            'zip_auc': req.query.zipAuc,
            'zip_exit': req.query.zipExit,
        }
    }).then(response => {
        res.send(response.data);
    }).catch(e => {
        console.log(e);
    });
});
// calculator-get-intlcities
app.get('/calculator-get-intlcities', (req, res) => {
    (0, axios_1.default)({
        url: apiService.calculatorGetIntCities,
        data: {
            'port_id': req.query.port_id,
        }
    }).then(response => {
        res.send(response.data);
    }).catch(e => {
        console.log(e);
    });
});
// calculator-get-intlcities
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(express_1.default.static(__dirname + '/calc_front_end'));
