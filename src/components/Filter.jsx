import { FilterContainer } from 'components/styled/style';

const Filter = ({ title, value, onChange }) => {
    return (
        <FilterContainer>
            <p>{title}</p>
            <input type='text' name='filter' placeholder="Search by name" value={value} onChange={onChange}/>
        </FilterContainer>
      
  )
}

export default Filter;