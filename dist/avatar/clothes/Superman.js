"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// import { uniqueId } from 'lodash'
var SupermanShirt = /** @class */ (function (_super) {
    __extends(SupermanShirt, _super);
    function SupermanShirt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private path1 = uniqueId('react-path-')
    // private mask1 = uniqueId('react-mask-')
    SupermanShirt.prototype.render = function () {
        return (React.createElement("g", null,
            React.createElement("defs", null,
                React.createElement("clipPath", { id: "clip-Artboard_1" },
                    React.createElement("rect", { width: "645", height: "673" }))),
            React.createElement("g", { id: "Artboard_1", "data-name": "Artboard \u2013 1", clipPath: "url(#clip-Artboard_1)", style: { transform: 'scale(0.6) translate(-98px, -102px)' } },
                React.createElement("path", { id: "Path_1", "data-name": "Path 1", d: "M349.182,633.073c.541.85,69.492,85.28,183.683,84.682,75.364-4.862,115.6-18.121,182.5-83.665.953,1.174-29.345-67.227-105.322-76.725-.832-.989-10.339,26.309-68.734,29.826-21.194,1.753-84.739-.3-87.538-29.826C452.837,557.828,382.917,564.049,349.182,633.073Z", transform: "translate(-208 -122.485)", fill: "#001eee" }),
                React.createElement("g", { id: "Polygon_1", "data-name": "Polygon 1", transform: "translate(390 587) rotate(180)", fill: "#f0dc41" },
                    React.createElement("path", { d: "M 123.1190032958984 88.5 L 2.880986213684082 88.5 L 62.99999618530273 2.615700006484985 L 123.1190032958984 88.5 Z", stroke: "none" }),
                    React.createElement("path", { d: "M 62.99999618530273 5.231369018554688 L 5.761955261230469 87 L 120.238037109375 87 L 62.99999618530273 5.231369018554688 M 62.99999618530273 0 L 126 90 L -7.62939453125e-06 90 L 62.99999618530273 0 Z", stroke: "none", fill: "#e81a3f" })),
                React.createElement("path", { id: "Polygon_2", "data-name": "Polygon 2", d: "M10.5,0,21,16H0Z", transform: "translate(285 513) rotate(180)", fill: "#002a32" }),
                React.createElement("path", { id: "Polygon_3", "data-name": "Polygon 3", d: "M10.5,0,21,16H0Z", transform: "translate(390 513) rotate(180)", fill: "#002a32" }),
                React.createElement("path", { id: "Path_2", "data-name": "Path 2", d: "M485.083,636.139l10.093-15.31", transform: "translate(-209 -123)", fill: "none", stroke: "#e81a3f", strokeWidth: "3" }),
                React.createElement("path", { id: "Path_3", "data-name": "Path 3", d: "M493.726,633.961l-8.643-13.132", transform: "translate(-116.551 -121.822)", fill: "none", stroke: "#e81a3f", strokeLinecap: "round", strokeWidth: "3" }),
                React.createElement("text", { id: "S", transform: "translate(300 484)", fill: "#e81a3f", fontSize: "80", fontFamily: "ArialRoundedMTBold, Arial Rounded MT Bold" },
                    React.createElement("tspan", { x: "0", y: "76" }, "S")),
                React.createElement("path", { id: "Path_4", "data-name": "Path 4", d: "M483.5,582.277l-12.895-24.834s-42.75-6.367-89.66,35.014C381.1,593.635,483.5,582.277,483.5,582.277Z", transform: "translate(-209 -123)", fill: "#e81a3f" }),
                React.createElement("path", { id: "Path_5", "data-name": "Path 5", d: "M380.945,582.277l12.895-24.834s42.75-6.367,89.66,35.014C483.35,593.635,380.945,582.277,380.945,582.277Z", transform: "translate(-10 -125)", fill: "#e81a3f" }))));
    };
    SupermanShirt.optionValue = 'SupermanShirt';
    return SupermanShirt;
}(React.Component));
exports.default = SupermanShirt;
