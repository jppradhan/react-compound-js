'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = envPublicUrl ||
    (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.tsx'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.ts'),
  appNodeModules: resolveApp('node_modules'),
  appTsConfig: resolveApp('tsconfig.json'),
  appTsLint: resolveApp('tslint.json'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  components: {
    Button: resolveApp('src/components/Button/Button.tsx'),
    Carousel: resolveApp('src/components/Carousel/Carousel.tsx'),
    DatePicker: resolveApp('src/components/DatePicker/DatePicker.tsx'),
    Form: resolveApp('src/components/Form/Form.tsx'),
    InputCheckbox: resolveApp('src/components/Form/InputCheckbox.tsx'),
    InputDate: resolveApp('src/components/Form/InputDate.tsx'),
    InputRadio: resolveApp('src/components/Form/InputRadio.tsx'),
    InputRange: resolveApp('src/components/Form/InputRange.tsx'),
    InputText: resolveApp('src/components/Form/InputText.tsx'),
    Image: resolveApp('src/components/Image/Image.tsx'),
    Modal: resolveApp('src/components/Modal/Modal.tsx'),
    Pagination: resolveApp('src/components/Pagination/Pagination.tsx'),
    PopOver: resolveApp('src/components/PopOver/PopOver.tsx'),
    Ratings: resolveApp('src/components/Ratings/Ratings.tsx'),
    Get: resolveApp('src/components/Restful/Get.tsx'),
    Post: resolveApp('src/components/Restful/Post.tsx'),
    sortable: resolveApp('src/components/sortable/sortable.tsx'),
    Tabs: resolveApp('src/components/Tabs/Tabs.tsx'),
    VideoPlayer: resolveApp('src/components/VideoPlayer/VideoPlayer.tsx'),
  }
};
