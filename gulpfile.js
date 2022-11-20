const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const connect = require("gulp-connect");

function styles() {
    return src("src/styles/main.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(dest("dist"))
        .pipe(connect.reload());
}
function server() {
    connect.server({ livereload: true, root: "dist", port: 3000 });
}

function assets() {
    return src("public/assets/**")
        .pipe(dest("dist/assets"))
        .pipe(connect.reload());
}

function html() {
    return src("public/index.html").pipe(dest("dist")).pipe(connect.reload());
}

function scripts() {
    return browserify("src/scripts/app.js")
        .transform(
            babelify.configure({
                presets: ["@babel/preset-env"],
            })
        )
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest("dist"))
        .pipe(connect.reload());
}

function sentinel() {
    watch("public/index.html", { ignoreInitial: false }, html);
    watch("src/styles/**/*.scss", { ignoreInitial: false }, styles);
    watch("src/scripts/**/*.js", { ignoreInitial: false }, scripts);
    watch("public/assets/**", { ignoreInitial: false }, assets);
}

exports.default = parallel(server, sentinel);
