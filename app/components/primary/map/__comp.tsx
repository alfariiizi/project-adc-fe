import React, { useCallback, useEffect, useRef, useState } from "react";

interface ClientProps<T> {
  data: T[];
  renderItem: (props: { item: T; index: number }) => React.ReactElement;
  keyExtractor?: (item: T, index: number) => string;

  ListHeaderComponent?: React.ReactElement;
  ListFooterComponent?: React.ReactElement;
  ListEmptyComponent?: React.ReactElement;
  ItemSeparatorComponent?: React.ReactElement;

  className?: string;
  itemClassName?: string;
}

export function FlatListClient<T extends object>({
  data,
  renderItem,
  keyExtractor,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  ItemSeparatorComponent,
  className,
  itemClassName,
}: ClientProps<T>) {
  // State for tracking visible items in the viewport
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });

  // References for DOM elements and scroll handling
  const containerRef = useRef<HTMLDivElement>(null);
  const itemHeightRef = useRef<number>(0);

  // Calculate item height once the first item is rendered
  const measureItemHeight = useCallback((element: HTMLDivElement | null) => {
    if (element && !itemHeightRef.current) {
      itemHeightRef.current = element.getBoundingClientRect().height;
    }
  }, []);

  // Enhanced scroll handler that uses actual scroll height
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || !itemHeightRef.current) return;

    const { scrollTop, clientHeight, scrollHeight } = container;

    // Use actual item height for calculations
    const itemHeight = itemHeightRef.current;
    const bufferItems = Math.ceil((clientHeight / itemHeight) * 0.5); // Buffer half a viewport

    // Calculate visible range based on scroll position
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - bufferItems);
    const end = Math.min(
      data.length,
      Math.ceil((scrollTop + clientHeight) / itemHeight) + bufferItems
    );

    // Update visible range if it has changed
    setVisibleRange((prev) => {
      if (prev.start !== start || prev.end !== end) {
        return { start, end };
      }
      return prev;
    });

    // Optional: Add infinite scroll logic here using scrollHeight
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      // Could trigger loading more data
    }
  }, [data.length]);

  // Set up scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use passive listener for better scroll performance
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle empty state
  if (data.length === 0) {
    return (
      <div className={className}>
        {ListHeaderComponent}
        {ListEmptyComponent || <div>No items to display</div>}
        {ListFooterComponent}
      </div>
    );
  }

  // Calculate dimensions for virtualization
  const visibleData = data.slice(visibleRange.start, visibleRange.end);
  const totalHeight = data.length * (itemHeightRef.current || 50);
  const offsetTop = visibleRange.start * (itemHeightRef.current || 50);

  return (
    <div
      ref={containerRef}
      className={`relative h-full overflow-auto ${className}`}
      role="list"
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {ListHeaderComponent}

        <div
          style={{
            transform: `translateY(${offsetTop}px)`,
            position: "absolute",
            width: "100%",
            top: 0,
          }}
        >
          {visibleData.map((item, index) => (
            <React.Fragment
              key={keyExtractor?.(item, visibleRange.start + index) ?? index}
            >
              {index > 0 && ItemSeparatorComponent}
              <div
                ref={index === 0 ? measureItemHeight : undefined}
                className={itemClassName}
                role="listitem"
              >
                {renderItem({
                  item,
                  index: visibleRange.start + index,
                })}
              </div>
            </React.Fragment>
          ))}
        </div>

        {ListFooterComponent}
      </div>
    </div>
  );
}
