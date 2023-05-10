import { getBucketResource } from "../functions";

export const TECHNOLOGY_ICONS = {
  JAVASCRIPT: getBucketResource('/technologies/typescript-javascript/javascript.png'),
  TYPESCRIPT: getBucketResource('/technologies/typescript-javascript/typescript.png'),
  REACT: getBucketResource('/technologies/typescript-javascript/react.png'),
  ANGULAR: getBucketResource('/technologies/typescript-javascript/angularjs.png'),

  DART: getBucketResource('/technologies/dart/dart.png'),
  FLUTTER: getBucketResource('/technologies/dart/flutter.png'),

  CSS: getBucketResource('/technologies/html-css/css3.png'),
  SASS: getBucketResource('/technologies/html-css/sass.svg'),
  HTML: getBucketResource('/technologies/html-css/html-5.png'),

  PYTHON: getBucketResource('/technologies/misc/python.png'),
  CSHARP: getBucketResource('/technologies/misc/c-sharp-logo.png'),
  JAVA: getBucketResource('/technologies/misc/java.png'),
  EJS: getBucketResource('/technologies/misc/node-js.png'),
  NOT_FOUND: getBucketResource('/technologies/misc/page-not-found.png'),

  SWIFT: getBucketResource('/technologies/swift/swift.png'),
};
