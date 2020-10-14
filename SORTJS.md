#### Sort Javascript examples

##### ---------------------------------------------------

```javascript
const sortProjectByAscending = (unsortData, dataType) => {
  // need to define new array, if not it will shows error 'unexpected side effect of computed' because sort() mutate the computed.
  const unsortedData = [...unsortData];
  const sortedDataByAscending = unsortedData.sort((a, b) => {
    if (a.project_name < b.project_name) {
      return -1;
    }
    if (a.project_name > b.project_name) {
      return 1;
    }
    return 0;
  });
  // if its sorting based on "dataProject", will sort projects that doesn't have folder
  if (dataType === "dataProject") {
    return sortedDataByAscending.filter(item => !item.project_folder);
  }
  return sortedDataByAscending;
};
const sortProjectByDescending = (unsortData, dataType) => {
  // need to define new array, if not it will shows error 'unexpected side effect of computed' because sort() mutate the computed.
  const unsortedData = [...unsortData];
  const sortedDataByDescending = unsortedData.sort((a, b) => {
    if (a.project_name > b.project_name) {
      return -1;
    }
    if (a.project_name < b.project_name) {
      return 1;
    }
    return 0;
  });
  // if its sorting based on "dataProject", will sort projects that doesn't have folder
  if (dataType === "dataProject") {
    // only return project that doesn't have folder
    return sortedDataByDescending.filter(item => !item.project_folder);
  }
  return sortedDataByDescending;
};
const sortProjectByLatestDate = (unsortData, dataType) => {
  // need to define new array, if not it will shows error 'unexpected side effect of computed' because sort() mutate the computed.
  const unsortedData = [...unsortData];
  const sortedDataByNewestDate = unsortedData.sort((a, b) => {
    // for project that doesn't have date
    if (!a.updated_at || !b.updated_at) {
      return -1;
    }
    const c = new Date(a.updated_at);
    const d = new Date(b.updated_at);

    return d - c;
  });
  // if its sorting based on "dataProject", will sort projects that doesn't have folder
  if (dataType === "dataProject") {
    // only return project that doesn't have folder
    return sortedDataByNewestDate.filter(item => !item.project_folder);
  }
  return sortedDataByNewestDate;
};
const sortProjectByEarliestDate = (unsortData, dataType) => {
  // need to define new array, if not it will shows error 'unexpected side effect of computed' because sort() mutate the computed.
  const unsortedData = [...unsortData];
  const sortedDataByOldestDate = unsortedData.sort((a, b) => {
    // for project that doesn't have date
    if (!a.updated_at || !b.updated_at) {
      return -1;
    }
    const c = new Date(a.updated_at);
    const d = new Date(b.updated_at);

    return c - d;
  });
  // if its sorting based on "dataProject", will sort projects that doesn't have folder
  if (dataType === "dataProject") {
    // only return project that doesn't have folder
    return sortedDataByOldestDate.filter(item => !item.project_folder);
  }
  return sortedDataByOldestDate;
};
const sortProjectByResolution = (unsortData, dataType) => {
  // need to define new array, if not it will shows error 'unexpected side effect of computed' because sort() mutate the computed.
  const unsortedData = [...unsortData];
  const sortedDataByBiggestResolution = unsortedData.sort((a, b) => {
    if (a.canvas_width > b.canvas_width) return -1;
    if (a.canvas_width === b.canvas_width && a.canvas_height > b.canvas_height)
      return -1;
  });
  // if its sorting based on "dataProject", will sort projects that doesn't have folder
  if (dataType === "dataProject") {
    // only return project that doesn't have folder
    return sortedDataByBiggestResolution.filter(item => !item.project_folder);
  }
  return sortedDataByBiggestResolution;
};
```
