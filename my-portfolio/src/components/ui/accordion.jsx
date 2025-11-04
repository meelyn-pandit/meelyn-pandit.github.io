import { useState } from "react";
import { Accordion, Span, Icon } from "@chakra-ui/react";
// '/home/meelyn-pandit/Documents/cloud-development/meelyn-pandit.github.io/my-portfolio/src/data.js'

export default function AccordionCustom(props) {
  const color = props.color
  const [items, setItems] = useState(props.items);
  const [value, setValue] = useState(() => items.map((c) => c.value));

  console.log('custom accordion items', items)

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
          <Accordion.ItemTrigger>
            <Icon fontSize="lg" color="fg.subtle">
                {item.icon}
            </Icon>
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
