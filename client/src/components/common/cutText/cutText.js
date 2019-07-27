const cutText = (content, maxLength) => {
  if (content.length < 1) {
    return "Error";
  } else if (content.length <= maxLength) {
    return content;
  } else {
    return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
  }
};

export default cutText;
