<template>
  <div class="v-radar">
    <svg :width="svgSize" :height="svgSize" :viewBox="svgViewBox">
      <polygon
              :points="buildStructure(1)"
              :fill="transparent"
              :stroke="externalStrokeColor"
              :stroke-width="externalStrokeWidth"
      ></polygon>
      <polygon
              :points="buildStructure(n/10)"
              :fill="transparent"
              :stroke="internalsStrokeColor"
              :stroke-width="internalsStrokeWidth"
              v-for="n in 9"
              :key="n"
      ></polygon>
      <polygon
              :points="buildStructure(0.5)"
              :fill="averageFillColor"
              :stroke="averageStrokeColor"
              :stroke-width="averageStrokeWidth"
      ></polygon>
      <polygon v-for="(f, index) in buildPoints" :key="index" :points="f" :fill="polyFillColor[index]" style="opacity: 0.7"></polygon>
      <line
              :x1="originPoint"
              :y1="originPoint"
              :x2="xLineCoordinate(index)"
              :y2="yLineCoordinate(index)"
              :stroke="linesStrokeColor"
              :stroke-width="linesStrokeWidth"
              v-for="index in statsLength"
              :key="index"
      >
      </line>
      <g class="label">
        <text
            :x="xTextCoordinate(index)"
            :y="yTextCoordinate(index)"
            font-family="Verdana"
            font-size="60"
            fill="#ffffff"
            v-for="index in statsLength"
            v-text="shortNames[index]"
            :key="index"
        >
        </text>
      </g>
    </svg>
  </div>
</template>
<script>
    export default {
        name: 'radar',
        props: {
            radar: {
                type: Object,
                required: false,
                default:{
                    size: '300',                                // pixel unit
                    viewbox: '1000',                            // unit used inside the svg (here 400px = 1000 unités)
                    radius: '350',                              // same unit than above (diamètre = 900), keep the radius < (viewbox / 2)
                    structure: {
                        external: {                             // external stroke of the structure's polygon
                            strokeColor: 'rgba(0, 0, 0, 1)',    // color (any css format is usable (hexa, rgb, rgba...))
                            strokeWidth: '4',                   // pixel unit
                        },
                        internals: {                            // internals stroke of the structure's polygon (one every 10%)
                            strokeColor: 'rgba(0, 0, 0, .3)',   // color (any css format is usable (hexa, rgb, rgba...))
                            strokeWidth: '1',                   // pixel unit
                        },
                        average: {                              // average polygon (placed at 50%)
                            strokeColor: 'rgba(0, 0, 0, 1)',    // stroke color (any css format is usable (hexa, rgb, rgba...))
                            strokeWidth: '2',                   // pixel unit
                            fillColor: 'rgba(0, 0, 0, .5)',     // polygon color (any css format is usable (hexa, rgb, rgba...))
                        },
                    },
                    lines: {                                    // lines from center to summits
                        strokeColor: 'rgba(0, 0, 0, .3)',       // color (any css format is usable (hexa, rgb, rgba...))
                        strokeWidth: '1',                       // pixel unit
                    }
                }
            },
            stats: Array,
            scale: Object,
            setting: Object,
            fontcolor: String,
        },
        data() {
            return {
                transparent: 'rgba(0, 0, 0, 0)'
            }
        },
        mounted() {
            console.log('mounted');
            console.log(this.stats);
        },
        methods: {
            buildStructure(percentage) {
                let points = '';
                console.log(this.stats);

                for (let count = 0; count < this.statsLength; count++) {
                    let newAngle = calculateNewAngle(count, this.baseAngle);
                    let angleMultiplier = percentage * this.radius;
                    let x = calculateXCoordinate(newAngle, angleMultiplier, this.originPoint);
                    let y = calculateYCoordinate(newAngle, angleMultiplier, this.originPoint);
                    points += Math.round(x) + ',' + Math.round(y) + ' ';
                }

                return points;
            },
            xLineCoordinate(index) {
                let newAngle = calculateNewAngle((index - 1), this.baseAngle);

                return calculateXCoordinate(newAngle, this.radius, this.originPoint);
            },
            yLineCoordinate(index) {
                let newAngle = calculateNewAngle((index - 1), this.baseAngle);

                return calculateYCoordinate(newAngle, this.radius, this.originPoint);
            },
            xTextCoordinate(index) {
                let newAngle = calculateNewAngle((index - 1), this.baseAngle);

                return calculateXCoordinate(newAngle, parseFloat(this.radius) + 80, this.originPoint) - 60;
            },
            yTextCoordinate(index) {
                let newAngle = calculateNewAngle((index - 1), this.baseAngle);

                return calculateYCoordinate(newAngle, parseFloat(this.radius) + 60, this.originPoint) + 30;
            },
        },
        computed: {
            svgSize() {
                return setProperty(this.radar, 'size', '400') + 'px';
            },
            viewbox() {
                return setProperty(this.radar, 'viewbox', '1000');
            },
            svgViewBox() {
                return '0 0 ' + this.viewbox + ' ' + this.viewbox;
            },
            statsLength() {
                return objectLength(this.stats[0]);
            },
            baseAngle() {
                return calculateBaseAngle(this.statsLength);
            },
            radius() {
                return setProperty(this.radar, 'radius', '350');
            },
            originPoint() {
                return this.viewbox / 2;
            },
            externalStrokeColor() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'external')) {
                            return setProperty(this.radar.structure.external, 'strokeColor', '#222222');
                        }
                    }
                }

                return '#222222';
            },
            externalStrokeWidth() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'external')) {
                            return setProperty(this.radar.structure.external, 'strokeWidth', '4') + 'px';
                        }
                    }
                }

                return '4px';
            },
            internalsStrokeColor() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'internals')) {
                            return setProperty(this.radar.structure.internals, 'strokeColor', '#777777');
                        }
                    }
                }

                return '#777777';
            },
            internalsStrokeWidth() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'internals')) {
                            return setProperty(this.radar.structure.internals, 'strokeWidth', '2') + 'px';
                        }
                    }
                }

                return '2px';
            },
            linesStrokeColor() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'lines')) {
                        return setProperty(this.radar.lines, 'strokeColor', '#000000');
                    }
                }

                return '#000';
            },
            linesStrokeWidth() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'lines')) {
                        return setProperty(this.radar.lines, 'strokeWidth', '2') + 'px';
                    }
                }

                return '2px';
            },
            averageStrokeColor() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'average')) {
                            return setProperty(this.radar.structure.average, 'strokeColor', '#777777');
                        }
                    }
                }

                return '#777';
            },
            averageStrokeWidth() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'average')) {
                            return setProperty(this.radar.structure.average, 'strokeWidth', '2') + 'px';
                        }
                    }
                }

                return '2px';
            },
            averageFillColor() {
                if (objectIsDefined(this.radar)) {
                    if (objectHasProperty(this.radar, 'structure')) {
                        if (objectHasProperty(this.radar.structure, 'average')) {
                            return setProperty(this.radar.structure.average, 'fillColor', 'rgba(0, 0, 0, .2)');
                        }
                    }
                }

                return 'rgba(0, 0, 0, .2)';
            },
            buildPoints() {
                var result = [];
                for (let index = 0; index < this.stats.length; index++) {
                    let points = '';
                    let divider = 1;

                    for (let i = 0; i < this.statsLength; i++) {
                        let name = this.stats[index][i].name;
                        let value = this.stats[index][i].value;
                        if (this.scale.hasOwnProperty(removeAccents(name.toLowerCase()))) {
                            divider = this.scale[removeAccents(name.toLowerCase())];
                        } else {
                            divider = 100;
                        }
                        let newAngle = calculateNewAngle(i, this.baseAngle);
                        let angleMultiplier = value / divider * this.radius;
                        let x = calculateXCoordinate(newAngle, angleMultiplier, this.originPoint);
                        let y = calculateYCoordinate(newAngle, angleMultiplier, this.originPoint);
                        points += Math.round(x) + ',' + Math.round(y) + ' ';
                    }
                    result.push(points);

                }
                return result;

            },
            shortNames() {
                let shortNames = [0];
                if(this.stats[0].length > 0){
                    for (let i = 0; i < this.statsLength; i++) {
                        let stat = this.stats[0][i];
                        if (objectHasProperty(stat, 'shortName')) {
                            shortNames.push(setProperty(stat, 'shortName', stat.name).slice(0, 5));
                        } else {
                            shortNames.push(stat.name.slice(0, 5));
                        }
                    }
                }
                return shortNames;
                
            },
            polyFillColor() {
                var result = [];
                this.setting.forEach(f => {
                    result.push(f.polycolor)
                });
                return result
            }
        }
    }

    function objectIsDefined(object) {
        return (typeof object !== 'undefined');
    }

    function objectHasProperty(object, property) {
        if (typeof object !== 'undefined') {
            if (object.hasOwnProperty(property)) {
                return true;
            }
        }

        return false;
    }

    function setProperty(object, propertyToTest, defaultValue) {
        if (objectHasProperty(object, propertyToTest)) {
            if (typeof object[propertyToTest] !== 'undefined') {
                return object[propertyToTest];
            }
        }

        return defaultValue;
    }

    // @return the obj length
    function objectLength(obj) {
        let i;
        let length = 0;
        for (i in obj) {
            length++;
        }

        return length;
    }

    // @return the angle of one part based on total
    function calculateBaseAngle(total) {
        return Math.PI * 2 / total;
    }

    // @return the angle of the index
    function calculateNewAngle(index, baseAngle) {
        return (Math.PI / 2) + Math.PI + (baseAngle * index);
    }

    function calculateXCoordinate(angle, angleMultiplier, origin) {
        return origin + Math.cos(angle) * angleMultiplier;
    }

    function calculateYCoordinate(angle, angleMultiplier, origin) {
        return (origin + Math.sin(angle) * angleMultiplier);
    }

    function removeAccents(str) {
        let accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
        let accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
        str = str.split('');
        let strLen = str.length;
        let i, x;
        for (i = 0; i < strLen; i++) {
            if ((x = accents.indexOf(str[i])) !== -1) {
                str[i] = accentsOut[x];
            }
        }

        return str.join('');
    }
</script>
<style>

</style>