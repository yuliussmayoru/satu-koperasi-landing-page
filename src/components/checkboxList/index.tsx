import React, { useState } from "react";
import { CheckboxListProps } from "./type";

export default function ListWithCheckbox(props: CheckboxListProps) {
  const { items, selectedItems, onChange } = props;
  const [checkedItems, setCheckedItems] = useState<string[]>(selectedItems);

  const handleCheckboxChange = (id: string) => {
    const updatedCheckedItems = checkedItems.includes(id)
      ? checkedItems.filter((itemId) => itemId !== id) // Remove unchecked item
      : [...checkedItems, id]; // Add checked item

    setCheckedItems(updatedCheckedItems);
    onChange?.(updatedCheckedItems); // Call onChange callback if provided
  };

  return (
    <ul className="list-none p-0 m-0">
      {items.map((item) => (
        <li key={item.id} className="flex items-center py-2">
          <input
            type="checkbox"
            id={`checkbox-${item.id}`}
            checked={checkedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
            className="mr-3 cursor-pointer w-4 h-4"
          />
          <label
            htmlFor={`checkbox-${item.id}`}
            className="cursor-pointer text-gray-700"
          >
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
}
