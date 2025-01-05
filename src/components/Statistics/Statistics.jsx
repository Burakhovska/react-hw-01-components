import PropTypes from 'prop-types';
import data from '../../data.json';
import { StatSection, StatsList, StatsLi } from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats = data }) => {
  return (
    <StatSection className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatsList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatsLi className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatsLi>
        ))}
      </StatsList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Statistics.defaultProps = {
  stats: [],
};
