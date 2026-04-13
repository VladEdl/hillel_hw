import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle, action }) => (
  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
    <div>
      <h1 className="h3 mb-0">{title}</h1>
      {subtitle && <p className="text-muted mb-0 mt-1">{subtitle}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  action: PropTypes.node,
};

export default PageHeader;
