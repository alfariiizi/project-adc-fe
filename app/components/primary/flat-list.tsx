import React, { useRef, useEffect, useCallback } from 'react';

// Base interface that all items must implement
interface BaseItem {
  [key: string]: unknown;
}

// Type definitions for sort and filter configurations
interface SortConfig<T extends BaseItem> {
  key: keyof T;
  direction: 'asc' | 'desc';
}

interface FilterConfig<T extends BaseItem> {
  key: keyof T;
  value: unknown;
  comparator?: (itemValue: unknown, filterValue: unknown) => boolean;
}

type FilterConfigs<T extends BaseItem> = FilterConfig<T>[];

// Props interface for the FlatList component
interface FlatListProps<T extends BaseItem> {
  // Data and rendering
  data: T[];
  renderItem: (props: { item: T; index: number }) => React.ReactElement;
  keyExtractor?: (item: T, index: number) => string;

  // Sorting and filtering
  sortConfig?: SortConfig<T>;
  filterConfig?: FilterConfigs<T>;
  customSort?: (a: T, b: T) => number;

  // State handling
  isLoading?: boolean;
  isError?: boolean;
  errorComponent?: React.ReactElement;
  loadingComponent?: React.ReactElement;
  emptyComponent?: React.ReactElement;

  // Styling
  className?: string;
  itemClassName?: string;

  // Infinite scroll
  onEndReached?: () => void;
  onEndReachedThreshold?: number;

  // List components
  ListHeaderComponent?: React.ReactElement;
  ListFooterComponent?: React.ReactElement;
  ListEmptyComponent?: React.ReactElement;
  ItemSeparatorComponent?: React.ReactElement;
}

// Default comparator function for filtering
const defaultComparator = (itemValue: unknown, filterValue: unknown): boolean => {
  if (typeof itemValue === 'string' && typeof filterValue === 'string') {
    return itemValue.toLowerCase().includes(filterValue.toLowerCase());
  }
  return itemValue === filterValue;
};

function FlatList<T extends BaseItem>({
  data,
  renderItem,
  keyExtractor,
  sortConfig,
  filterConfig,
  customSort,
  isLoading = false,
  isError = false,
  errorComponent,
  loadingComponent,
  emptyComponent,
  className = '',
  itemClassName = '',
  onEndReached,
  onEndReachedThreshold = 0.8,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  ItemSeparatorComponent,
}: FlatListProps<T>) {
  // Create a ref for the container to detect scroll position
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Process data: filter and sort
  const processData = useCallback((items: T[]) => {
    let processedData = [...items];
    
    // Apply filtering
    if (filterConfig && filterConfig.length > 0) {
      processedData = processedData.filter(item => {
        return filterConfig.every(filter => {
          const itemValue = item[filter.key];
          const comparator = filter.comparator || defaultComparator;
          return comparator(itemValue, filter.value);
        });
      });
    }
    
    // Apply sorting
    if (customSort) {
      processedData.sort(customSort);
    } else if (sortConfig) {
      processedData.sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];
        
        // Handle string values
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return sortConfig.direction === 'asc' 
            ? valueA.localeCompare(valueB) 
            : valueB.localeCompare(valueA);
        }
        
        // Handle number values
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return sortConfig.direction === 'asc' 
            ? valueA - valueB 
            : valueB - valueA;
        }
        
        // Default comparison for other types
        if (sortConfig.direction === 'asc') {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      });
    }
    
    return processedData;
  }, [filterConfig, sortConfig, customSort]);
  
  // Process the data
  const processedData = processData(data);
  
  // Handler for scroll events to detect end reached
  const handleScroll = useCallback(() => {
    if (!containerRef.current || !onEndReached) return;
    
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const scrollPosition = scrollTop + clientHeight;
    const threshold = scrollHeight * onEndReachedThreshold;
    
    if (scrollPosition >= threshold) {
      onEndReached();
    }
  }, [onEndReached, onEndReachedThreshold]);
  
  // Set up scroll event listener
  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef && onEndReached) {
      currentRef.addEventListener('scroll', handleScroll);
      
      return () => {
        currentRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, onEndReached]);
  
  // Show loading state
  if (isLoading) {
    return loadingComponent || <div className="flatlist-loading">Loading...</div>;
  }
  
  // Show error state
  if (isError) {
    return errorComponent || <div className="flatlist-error">Error loading data</div>;
  }
  
  // Show empty state
  if (processedData.length === 0) {
    return ListEmptyComponent || emptyComponent || <div className="flatlist-empty">No items to display</div>;
  }
  
  return (
    <div 
      ref={containerRef} 
      className={`flatlist-container ${className}`}
      style={{ overflowY: 'auto' }}
    >
      {ListHeaderComponent}
      
      <div className="flatlist-content">
        {processedData.map((item, index) => {
          const key = keyExtractor ? keyExtractor(item, index) : index.toString();
          const itemElement = renderItem({ item, index });
          
          return (
            <React.Fragment key={key}>
              <div className={`flatlist-item ${itemClassName}`}>
                {itemElement}
              </div>
              {ItemSeparatorComponent && index < processedData.length - 1 && ItemSeparatorComponent}
            </React.Fragment>
          );
        })}
      </div>
      
      {ListFooterComponent}
    </div>
  );
}

export default FlatList;
