```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic. This will cause an infinite loop because the
    // setCount function will trigger a re-render, which in turn will
    // trigger this useEffect again.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```