const { render } = require("@testing-library/react");
const { default: Title } = require("../Title");

test("logo should be rendered", () => {
  const header = render(<Title />);
  console.log(header);
});
