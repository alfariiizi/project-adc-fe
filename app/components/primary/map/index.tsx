import React from "react";
import { FlatListClient } from "./__comp";

// Types remain similar but split server-specific props
interface ServerProps<T> {
  // Data and essential rendering props
  data: T[];
  renderItem: (props: { item: T; index: number }) => React.ReactElement;
  keyExtractor?: (item: T, index: number) => string;

  // Server-side sorting and filtering
  initialSortKey?: keyof T;
  initialSortDirection?: "asc" | "desc";
  initialFilters?: {
    key: keyof T;
    value: T[keyof T];
  }[];

  // Static components
  ListHeaderComponent?: React.ReactElement;
  ListFooterComponent?: React.ReactElement;
  ListEmptyComponent?: React.ReactElement;
  ItemSeparatorComponent?: React.ReactElement;

  // Visual customization
  className?: string;
  itemClassName?: string;
}

// Helper function for server-side sorting
function sortData<T>(
  data: T[],
  sortKey: keyof T | undefined,
  sortDirection: "asc" | "desc" = "asc"
): T[] {
  if (!sortKey) return data;

  return [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (aVal === bVal) return 0;
    const comparison = aVal < bVal ? -1 : 1;
    return sortDirection === "asc" ? comparison : -comparison;
  });
}

// Helper function for server-side filtering
function filterData<T>(
  data: T[],
  filters: { key: keyof T; value: T[keyof T] }[] = []
): T[] {
  if (!filters.length) return data;

  return data.filter((item) =>
    filters.every((filter) => item[filter.key] === filter.value)
  );
}

// Server Component
export function Map<T extends object>({
  data,
  renderItem,
  keyExtractor,
  initialSortKey,
  initialSortDirection,
  initialFilters,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  ItemSeparatorComponent,
  className,
  itemClassName,
}: ServerProps<T>) {
  // Process data on the server
  const processedData = filterData(
    sortData(data, initialSortKey, initialSortDirection),
    initialFilters
  );

  // Regular list view for small datasets (under 100 items)
  if (processedData.length < 100) {
    return (
      <div className={className}>
        {ListHeaderComponent}
        {processedData.length === 0 && ListEmptyComponent}
        {processedData.map((item, index) => (
          <React.Fragment key={keyExtractor?.(item, index) ?? index}>
            {index > 0 && ItemSeparatorComponent}
            <div className={itemClassName}>{renderItem({ item, index })}</div>
          </React.Fragment>
        ))}
        {ListFooterComponent}
      </div>
    );
  }

  // For larger datasets, use client-side virtualization
  return (
    <FlatListClient
      data={processedData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      className={className}
      itemClassName={itemClassName}
    />
  );
}

export default Map;
