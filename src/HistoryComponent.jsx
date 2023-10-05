import React from 'react';

function HistoryComponent() {
  return (
    <div className="history-component">
      <h2>History of Node.js and Bun Toolkit</h2>
      <h3>Node.js</h3>
      <p>
        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It was initially released in 2009 by Ryan Dahl and has since gained immense popularity as a server-side platform for building scalable and high-performance applications. Node.js introduced the concept of using JavaScript on the server, allowing developers to write both frontend and backend code in the same language.
      </p>
      <p>
        One of the key features of Node.js is its non-blocking and event-driven architecture, which enables handling a large number of concurrent connections efficiently. This makes it particularly well-suited for building real-time applications, such as chat apps and streaming services. Node.js also has a vast ecosystem of third-party libraries and frameworks, making it easy for developers to build applications quickly.
      </p>
      <h3>Bun Toolkit</h3>
      <p>
        The Bun Toolkit is an alternative to Node.js and npm that provides a fast and efficient environment for running server-side JavaScript applications. It aims to offer improved performance, reduced complexity, and increased developer productivity. The toolkit includes a JavaScript runtime, a package manager, a test runner, and a bundler, providing a comprehensive solution for building JavaScript apps.
      </p>
      <p>
        Bun Toolkit leverages the performance-minded JavaScriptCore engine built for Safari, which allows it to start fast and run fast. It provides a minimal set of highly-optimized APIs for common tasks like starting an HTTP server and writing files. Additionally, Bun Toolkit aims to be a drop-in replacement for Node.js, implementing Node's module resolution algorithm, globals, and built-in modules.
      </p>
      <p>
        With the Bun Toolkit, developers can benefit from a simplified module resolution, improved dependency management using a native npm client, TypeScript support, and familiar Web-standard APIs. The toolkit also handles JSX syntax by transpiling it to vanilla JavaScript, making it compatible with React and custom JSX transforms. Furthermore, Bun Toolkit offers a watch mode that automatically restarts the process when any imported file changes, enhancing development productivity.
      </p>
    </div>
  );
}

export default HistoryComponent;
