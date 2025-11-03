import { useState } from "react";
import { Accordion, Span } from "@chakra-ui/react";
// '/home/meelyn-pandit/Documents/cloud-development/meelyn-pandit.github.io/my-portfolio/src/data.js'

export default function AccordionCustom(props) {
  const color = props.color
  const [items, setItems] = useState(props.items);
  const [value, setValue] = useState(() => items.map((c) => c.value));

  return (
    <Accordion.Root
      collapsible
      defaultValue={[]}
      multiple={false}
      onValueChange={(e) => {
        setValue(e.value);
      }}
      // onFocusChange={(newIndex) => setAccordionIndex(newIndex)}
    >
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          {console.log("item value", item.value)}
          <Accordion.ItemTrigger>
            <Span flex="1" color={color}>
              {item.title}
            </Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody color={color}>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
