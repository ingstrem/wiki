const initialFilters = Object.freeze({
  category: 'all',
  priceRange: [0, 100],
});

const [filters, setFilters] = useState(initialFilters);