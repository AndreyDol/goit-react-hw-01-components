import PropTypes from 'prop-types';
import {
  Wrap,
  Title,
  WrapItem,
  Item,
  ItemLabel,
  ItemPercentage,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <WrapItem>
        {data.map((item, idx) => (
          <Item key={item.id}>
            <ItemLabel>{item.label}</ItemLabel>
            <ItemPercentage>{item.percentage}%</ItemPercentage>
          </Item>
        ))}
      </WrapItem>
    </Wrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
