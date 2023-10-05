import React from 'react';

function BunComponent() {
  return (
    <div className="bun-component">
      <h2>Bun Toolkit: An Alternative to Node.js and npm</h2>
      <p>
        Bun is a JavaScript runtime and toolkit that aims to provide an alternative to Node.js and npm. It offers a fast and efficient environment for running server-side JavaScript applications while providing a cohesive set of tools for improved performance, reduced complexity, and increased developer productivity.
      </p>
      <div>
        <h3>Key Features of Bun:</h3>
        <h4>Speed</h4>
        <p>
          Bun starts fast and runs fast, leveraging the performance-minded JavaScriptCore engine built for Safari.
        </p>
        <h4>Elegant APIs</h4>
        <p>
          Bun provides a minimal set of highly-optimized APIs for common tasks like starting an HTTP server and writing files.
        </p>
        <h4>Complete Toolkit</h4>
        <p>
          Bun includes a package manager, test runner, and bundler, offering a comprehensive solution for building JavaScript apps.
        </p>
        <h4>Drop-in Node.js Compatibility</h4>
        <p>
          Bun aims to be a drop-in replacement for Node.js, implementing Node's module resolution algorithm, globals, and built-in modules.
        </p>
        <h4>Improved Dependency Management</h4>
        <p>
          Bun uses a native npm client for managing dependencies, ensuring fast installation times.
        </p>
        <h4>Simplified Module Resolution</h4>
        <p>
          Bun simplifies module resolution rules, removing complexity around CommonJS, ESM, file extensions, and package.json configurations.
        </p>
        <h4>TypeScript Support</h4>
        <p>
          Bun treats TypeScript as a first-class citizen, supporting execution of .ts and .tsx files and respecting tsconfig.json settings.
        </p>
        <h4>Web-Standard APIs</h4>
        <p>
          Bun implements familiar Web-standard APIs like fetch, ReadableStream, WebSocket, and FormData.
        </p>
        <h4>JSX Support</h4>
        <p>
          Bun handles JSX syntax by internally transpiling it to vanilla JavaScript, making it easy to use with React and custom JSX transforms.
        </p>
        <h4>Watch Mode</h4>
        <p>
          Bun provides a watch mode that automatically restarts the process when any imported file changes, enhancing development productivity.
        </p>
      </div>
      <p>
        With Bun, you can enjoy the benefits of a performant JavaScript runtime and a comprehensive toolkit, empowering you to build efficient and robust JavaScript applications.
      </p>
    </div>
  );
}

export default BunComponent;
