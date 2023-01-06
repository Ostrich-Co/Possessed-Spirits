function CocktailForm({ selected, select }) {
    const categories = [
      'all',
      'whiskey',
      'gin',
      'tequila',
      'vodka',
      'rum',
      'aperol',
      'vermouth',
    ];
  
    const handleSelectChange = (e) => {
      select(e.target.value);
    };
  
    return (
      <div className="select-container hide-desktop mobile-sticky">
        <label htmlFor="mobile-filters">
          {/* <span>Pick Your Poison:</span>
          <select
            id="filter-select"
            value={selected}
            onChange={handleSelectChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.toLocaleUpperCase()}
              </option>
            ))}
          </select> */}
          <span>Add a new Cocktail:</span>
          <div>

            <div>
                <input placeholder="Enter the name of the drink">
                </input>
            </div>

            <div>
                <input 
                    placeholder="Enter the liquor name">
                </input>
            </div>
            
            <div>
                <input placeholder="Enter the ingredients">
                </input>
            </div>

            <div>
                <input placeholder="Enter the garnish">
                </input>
            </div>

            <div>
                <input placeholder="Enter the directions">
                </input>
            </div>

            <div>
                <button> 
                    Create Drink! 
                </button>
            </div>

          </div>
          
        </label>
      </div>
    );
  }
  
  export default CocktailForm;