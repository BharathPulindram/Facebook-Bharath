import React from "react";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvirat.kohli%2Fposts%2F3297096173710796&show_text=true&width=552&height=792&appId"
        width="340"
        height="100%"
        title="Fb-iframe"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
        allowTransparency="true"
      ></iframe>
    </div>
  );
}

export default Widgets;
