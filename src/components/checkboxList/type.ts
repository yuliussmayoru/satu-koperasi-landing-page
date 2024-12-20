export type CheckboxListProps = {
    items: { id: string; label: string }[]; // Array of objects with id and label
    selectedItems: string[];
    onChange: (value: string[]) => void;
  };
  