import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

// CMS.registerEditorComponent("pullQuote", PullQuoteWidget, PullQuotePreview);
CMS.registerEditorComponent({
  id: "youtube",
  label: "Youtube",
  fields: [{ name: "id", label: "Youtube Video ID", widget: "string" }],
  pattern: /^youtube (\S+)$/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return "youtube " + obj.id;
  },
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' +
      obj.id +
      '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});
