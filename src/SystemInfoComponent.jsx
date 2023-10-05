import React from 'react';

function SystemInfoComponent() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const language = window.navigator.language;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  return (
    <div className="system-info-component">
      <h2>Visitor System Information</h2>
      <p><strong>User Agent:</strong> {userAgent}</p>
      <p><strong>Platform:</strong> {platform}</p>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Screen Width:</strong> {screenWidth}</p>
      <p><strong>Screen Height:</strong> {screenHeight}</p>
    </div>
  );
}

export default SystemInfoComponent;
