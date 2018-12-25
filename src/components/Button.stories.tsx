import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Button from "./Button";
storiesOf("Button", module)
  .add("with hello", () => <Button onClick={action("clicked")}>Hello</Button>)
  .add("with hey", () => <Button onClick={action("clicked")}>Hey</Button>);
