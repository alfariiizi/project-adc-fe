import React, { useState, useEffect } from "react";
import { cn, generateShortCUID } from "~/lib/utils";

// Define the types for the props
// interface MapItem {
//   id: string | number;
//   [key: string]: unknown; // Allow for any additional properties
// }

interface MapProps<T> {
  // Required props
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string;

  // State props
  isLoading?: boolean;
  isEnabled?: boolean;

  // Custom rendering props
  LoadingComponent?: React.ComponentType<LoadingProps>;
  EmptyComponent?: React.ComponentType;
  DisabledComponent?: React.ComponentType;

  // Container styling and semantics
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  itemClassName?: string;

  // Additional props
  // onItemClick?: (item: T, index: number) => void;
  loadingProps?: LoadingProps;
}

interface LoadingProps {
  size?: "small" | "medium" | "large";
  message?: string;
  className?: string;
  [key: string]: unknown; // Allow for any additional loading props
}

// Default loading component
const DefaultLoading: React.FC<LoadingProps> = ({
  size = "medium",
  message = "Loading...",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`map-loading ${size} ${className}`}
      role="status"
      aria-live="polite"
      {...props}
    >
      <div className="map-loading-spinner" />
      {message && <p className="map-loading-message">{message}</p>}
    </div>
  );
};

// Default empty component
const DefaultEmpty: React.FC = () => (
  <div className="map-empty" role="status">
    <p>No items to display</p>
  </div>
);

// Default disabled component
const DefaultDisabled: React.FC = () => (
  <div className="map-disabled" role="status">
    <p>This component is currently disabled</p>
  </div>
);

function Mapper<T>({
  data,
  renderItem,
  keyExtractor,
  isLoading = false,
  isEnabled = true,
  LoadingComponent = DefaultLoading,
  EmptyComponent = DefaultEmpty,
  DisabledComponent = DefaultDisabled,
  as: Container = "div",
  className = "",
  itemClassName = "",
  // onItemClick,
  loadingProps = {},
}: MapProps<T>) {
  const [items, setItems] = useState<T[]>(data ?? []);
  const [generateKey] = useState(generateShortCUID());

  useEffect(() => {
    if (isEnabled && !isLoading) {
      setItems(data);
    }
  }, [data, isEnabled, isLoading]);

  // Handle different component states
  if (!isEnabled) {
    return <DisabledComponent />;
  }

  if (isLoading) {
    return <LoadingComponent {...loadingProps} />;
  }

  if (items.length === 0) {
    return <EmptyComponent />;
  }

  return (
    <Container className={cn(className)} role="list">
      {items.map((item, index) => (
        <div
          key={
            keyExtractor
              ? keyExtractor(item, index)
              : `list-${generateKey}-${index + 1}`
          }
          className={cn(itemClassName)}
          role="listitem"
        >
          {renderItem(item, index)}
        </div>
      ))}
    </Container>
  );
}

export { Mapper };
