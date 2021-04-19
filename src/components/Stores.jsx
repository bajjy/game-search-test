

export default function Stores(props) {
  const {
    stores,
    selectedStores,
    setSelectedStores
  } = props.props;
console.log(stores)
  const onChange = id => {
    const selectedCheckboxes = selectedStores;
    const findIdx = selectedCheckboxes.indexOf(id);
console.log(selectedStores)
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
      return setSelectedStores(selectedCheckboxes);
    };

    selectedCheckboxes.push(id);
    setSelectedStores(selectedCheckboxes);
  };
  return (
    <div className="Stores">
      {
        stores.map(store => <div key={store.storeID} className="button">
          <input 
            id={store.storeID} 
            name={store.storeID} 
            type="checkbox" 
            value={store.storeID} 
            onChange={() => onChange(store.storeID)}
            selected={selectedStores.includes(store.storeID)}
          />
          <label htmlFor={store.storeID}>
            <img src={'https://www.cheapshark.com' + store.images.logo} alt="" />
            {store.storeName}
          </label>

        </div>)
      }
    </div>
  );
}
